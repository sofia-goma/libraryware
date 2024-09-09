// ####################################################################################
// creation loop 

// import { useEffect } from "react";
// import axios from "axios";
// useEffect(() => {
//   async function hello() {
//     const { data } = await axios.get(
//       "https://openlibrary.org/subjects/the_woman_in_white.json"
//     );
//     const r = await data.works;
//     r.map(async function ({
//       key,
//       title,
//       authors,
//     }: {
//       key: string;
//       title: string;
//       authors: [{ name: string }];
//     }) {
//       // console.log(title);
//       // console.log(key.replace("/works/", ""));
//       // const author = authors[0].name;
//       // console.log(authors[0].name);

//       const details = await axios.get(
//         `https://openlibrary.org/works/${key.replace("/works/", "")}.json`
//       );
//       const reponse = await details.data;
//       const url = reponse?.covers[0]
//         ? `https://covers.openlibrary.org/b/id/${reponse.covers[0]}-L.jpg`
//         : "";
//       //  console.log(url);
//       // console.log(reponse.description.value ? reponse.description.value : reponse.description);
//       console.log(reponse);
//       //   await createBooks({
//       //     openLibraryId: key.replace("/works/", ""),
//       //     title: title,
//       //     author: authors[0].name,
//       //     coverUrl: reponse?.covers[0]
//       //       ? `https://covers.openlibrary.org/b/id/${reponse.covers[0]}-L.jpg`
//       //       : "",
//       //     description: (await reponse.description.value)
//       //       ? reponse.description.value
//       //       : reponse.description,
//       //   });
//     });
//   }
//   hello();
// }, []);


// #########################################################################################################
// creation loop
// load data
//   useEffect(() => {
// async function loadBook() {
// this is code is a trial for attempting to load 99 books from open library api
// http://openlibrary.org/people/george08/lists/OL97L/seeds.json
// /people/davidscotson/lists/OL235275L
// const resp = await axios.get('https://openlibrary.org/collections/100-best-mystery-and-thriller-books-of-all-time.json?limit=100&has_fulltext=true');
//   const { data } = await axios.get(
//     "https://openlibrary.org/people/davidscotson/lists/OL235275L/seeds.json"
//   );
// const result = await resp.json();
//   const allBooks = await data.entries;
// console.log(allBooks);
// allBooks.map((book: any) => (
//   createBooks({
//     openLibraryId: book?.url || "id",
//     title: book?.title || "title",
//     author: book?.picture.url || "author",
//     coverUrl: book?.picture.url || "picture",
//     description: book.description || "hello description",
//   })
// ))
// for (let i =) {
//   console.log(allBooks[i]);
//   createBooks({
//     openLibraryId: allBooks[i]?.url || "id",
//     title: allBooks[i]?.title || 'title',
//     author: allBooks[i]?.picture.url || 'author',
//     coverUrl: allBooks[i]?.picture.url || "picture",
//     description: allBooks[i].descrition || "hello description",
//   });
// }
// console.log(allBooks);
// console.log('hello world');
// console.log(result.docs);
//   setBooks(allBooks);
// }
// loadBook();
//   }, []);
// console.log(books[0]);

// for bookid
  // const [loading, setLoading] = useState(true);
  // const imageURL =
  //   `https://covers.openlibrary.org/b/id/${params.bookId}-L.jpg` ||
  //   notfoundimage;
  // const URL = "https://openlibrary.org/works/";
  // useEffect(() => {
  //   async function loadBookDetails() {
  //     try {
  //       const { data } = await axios.get(
  //         `https://openlibrary.org/works/${params.bookId}.json`
  //       );
  //       setBookDetails(data);
  //     } catch (error) {
  //       console.error("Error fetching book details:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   loadBookDetails();
  // }, [params.bookId]);

  // console.log(bookDetails);