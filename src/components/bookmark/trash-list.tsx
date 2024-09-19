import { api } from "../../../convex/_generated/api";
import { useQuery } from "convex/react";
import { Loading } from "./loading";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Id } from "../../../convex/_generated/dataModel";
import { Placeholder } from "./placeholder";

export default function TrashList({ user }: { user: any }) {

  const trashList = useQuery(api.trash.list, {
    userId: user.id as Id<"users">,
  });
  const isLoading = trashList === undefined;
  return (
    <>
      <Tabs defaultValue="grid">
        <div className="flex justify-between items-center"></div>

        {isLoading && <Loading title="trash items" />}

        <TabsContent value="grid">
          <div className="grid grid-cols-3 gap-4">
            {/* {trashList?.map((e) => (
              <BookMarkedList key={e._id} bookId={e.bookId} />
            ))} */}
          </div>
        </TabsContent>
      </Tabs>

      {trashList?.length === 0 && <Placeholder><p className="text-center">You don't have any items in the trash</p></Placeholder>}
    </>
  );
}
