import { api } from "../../../convex/_generated/api";
import { useQuery } from "convex/react";
import { Loading } from "./loading";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Id } from "../../../convex/_generated/dataModel";
import { Placeholder } from "./placeholder";
import { FileCard } from "./file-card";

export default function CollectionList({ user }: { user: any }) {
  const collectionsList = useQuery(api.collections.list, {
    userId: user.id as Id<"users">,
  });
  const isLoading = collectionsList === undefined;
  return (
    <>
      {/* <div className="flex justify-end items-center mb-8">
        <UploadButton />
      </div> */}

      <Tabs defaultValue="grid">
        {isLoading && <Loading title="collections items" />}

        <TabsContent value="grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {collectionsList?.map((e, i) => (
              <FileCard
                key={i}
                title={e.name}
                type={e.collectionType as "image" | "text" | "csv" | "word"}
                file={e.collectionURL}
                date={e._creationTime}
                userId={user.id}
                id={e.storageId}
                collectionId={e._id}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
      {collectionsList?.length === 0 && <Placeholder />}
      <div className="mb-24"></div>
    </>
  );
}
