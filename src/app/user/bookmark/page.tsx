import React from 'react';

export default function BookMark() {
  // Simulate some bookmarked books with random data
  const bookmarkedBooks = [
    { id: 1, title: 'Atomic Habits', author: 'James Clear', description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones.' },
    { id: 2, title: 'The Alchemist', author: 'Paulo Coelho', description: 'A journey to follow your dreams and discover your destiny.' },
    { id: 3, title: 'Educated', author: 'Tara Westover', description: 'A memoir about a girl who escapes her strict, survivalist family.' },
    { id: 4, title: 'The Power of Habit', author: 'Charles Duhigg', description: 'Why We Do What We Do in Life and Business.' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Bookmarked Books</h1>
      <ul className="space-y-6 max-w-4xl mx-auto">
        {bookmarkedBooks.map((book) => (
          <li key={book.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{book.title}</h2>
            <p className="text-gray-700 mb-4"><strong>Author:</strong> {book.author}</p>
            <p className="text-gray-600">{book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
