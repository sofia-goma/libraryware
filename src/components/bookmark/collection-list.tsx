import { api } from "../../../convex/_generated/api";
import { useQuery } from "convex/react";
import { Loading } from "./loading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Id } from "../../../convex/_generated/dataModel";
import { Placeholder } from "./placeholder";
import { UploadButton } from "./upload-button";
import TrashList from "./trash-list";
import { FileCard } from "./file-card";

export default function CollectionList({ user }: { user: any }) {
  const collectionsList = useQuery(api.collections.list, {
    userId: user.id as Id<"users">,
  });
  const isLoading = collectionsList === undefined;
  return (
    <>
      <div className="flex justify-end items-center mb-8">
        <UploadButton />
      </div>

      <Tabs defaultValue="grid">
        <div className="flex justify-between items-center"></div>

        {isLoading && <Loading title="trash items" />}

        <TabsContent value="grid">
          <div className="grid grid-cols-3 gap-4">
            {collectionsList?.map((e, i) => <FileCard key={i} />)}
          </div>
        </TabsContent>
        <TabsContent value="table">
          {/* <DataTable columns={columns} data={trashList} /> */}
        </TabsContent>
      </Tabs>

      {collectionsList?.length === 0 && <Placeholder />}
    </>
  );
}
