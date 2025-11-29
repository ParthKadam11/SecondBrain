import { CopyIcon } from "../icons/copyIcon";
import { PlusIcon } from "../icons/plusIcon";
import { FolderIcon } from "../icons/folderIcon";
export function HowItWorks() {
  return ( <div>
        <div className="pb-10 flex justify-center text-2xl font-bold">How to Use</div>
        <div className="pt-8 flex justify-center items-start w-full gap-30 px-20">
        <div className="flex flex-col items-center text-center max-w-xs">
            <div className="flex justify-center mb-4">
            <CopyIcon size="6" color="Main-900" />
            </div>
            <div className="text-lg font-semibold mb-2">STEP 1: Copy Link</div>
            <div className="text-sm ">
            Pick something you want to save a video, a thread, or a long read.
            Just copy the link.
            </div>
        </div>
        <div className="flex flex-col items-center text-center max-w-xs">
            <div className="flex justify-center mb-4">
            <PlusIcon size="6" color="Main-900" />
            </div>
            <div className="text-lg font-semibold mb-2">
            STEP 2: Add to SecondBrain
            </div>
            <div className="text-sm ">
            Paste the link into SecondBrain and hit save. We grab the title,
            source, and preview automatically.
            </div>
        </div>
        <div className="flex flex-col items-center text-center max-w-xs ">
            <div className="flex justify-center mb-4">
            <FolderIcon size="6" color="Main-900" />
            </div>
            <div className="text-lg font-semibold mb-2">
            STEP 3: Automatically Organize
            </div>
            <div className="text-sm ">
            Your saved content appears neatly organized. Search, tag, and revisit anytime.
            </div>
        </div>
        </div>
    </div>
  );
}
