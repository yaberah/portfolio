import { contentful } from "@/lib/contentful";

export default () => {

  const getCollection = async () => {
    const contentType = import.meta.env.VITE_CONTENTFUL_CONTENT_TYPE;
    const result = await contentful.getEntries<Post>({ content_type: contentType })
      .then((data) => {
        return data.items.map((item) => ({
            id: item.sys.id,
            title: item.fields.title,
            contents: item.fields.contents,
          })
        )
      })
      // @TODO エラー処理
      .catch((error) => { throw new Error(error) })
    return result;
  } 

  return {
    getCollection,
  }
}
