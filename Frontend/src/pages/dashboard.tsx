import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { CreateContent } from "../components/CreateComponent";
import { Button } from "../components/Button";
import { ShareIcon } from "../icons/shareIcon";
import { PlusIcon } from "../icons/plusIcon";
import { Card } from "../components/Card";
import { useContent } from "../hooks/useContent";
import { BACKEND_URL } from "../config";
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
      <div className="p-4 ml-76 h-min-screen  ">
        <CreateContent
          Open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex pb-6 p-4 gap-4 justify-end ">
          <Button
            variant="primary"
            text="Add Content"
            onClick={() => {
              setModalOpen(true);
            }}
            startIcon={<PlusIcon />}
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
              const ShareURL = `http://localhost:5173/share:${response.data.hash}`;
              navigator.clipboard.writeText(ShareURL);
              alert("Link Copied to clipboard");
            }}
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          />
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
