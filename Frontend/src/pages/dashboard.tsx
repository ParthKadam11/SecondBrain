import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { CreateContent } from "../components/CreateComponent";
import { Button } from "../components/Button";
import { ShareIcon } from "../icons/shareIcon";
import { PlusIcon } from "../icons/plusIcon";
import { Card } from "../components/Card";
import { useContent } from "../hooks/useContent";
import { BACKEND_URL } from "../utils/config";
import axios from "axios";
import Masonry from 'react-masonry-css';

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { content, refresh, deleteContent } = useContent();
  useEffect(() => {
    refresh();
  }, [modalOpen, refresh]);

  const breakpointCols = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="p-4 ml-72 min-h-screen">
        <CreateContent
          Open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex pb-6 p-4 gap-4 justify-between items-center flex-wrap">
          <div className="font-extrabold text-2xl text-Main-900">Content</div>
          <div className="flex gap-4">
          <Button
            variant="primary"
            text="Add Content"
            onClick={() => {
              setModalOpen(true);
            }}
            startIcon={<PlusIcon color="white" size="1.3"/>}
          />
          <Button
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/brain/share`,
                {
                  share: true,
                },
                {
                  headers: {
                    authorization: localStorage.getItem("authorization"),
                  },
                }
              );
              const ShareURL = `${BACKEND_URL}/share:${response.data.hash}`;
              navigator.clipboard.writeText(ShareURL);
              alert("Link Copied to clipboard");
            }}
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon color="Main-900"/>}
          />
          </div>
        </div>
        <Masonry
          breakpointCols={breakpointCols}
          className="flex gap-2"
          columnClassName="flex flex-col gap-2"
        >
          {content.map(({ _id, type, link, title }) => (
            <Card key={_id} id={_id} type={type} link={link} title={title} onDelete={deleteContent} />
          ))}
        </Masonry>
      </div>
    </div>
  );
}
