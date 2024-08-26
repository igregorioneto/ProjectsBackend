-- Inserir autores
call insert_authors('J.K. Rowling', '1965-07-31');
call insert_authors('George R.R. Martin', '1948-09-20');
call insert_authors('J.R.R. Tolkien', '1892-01-03');
call insert_authors('Isaac Asimov', '1920-01-02');

-- Inserir membros
call insert_members('Laryssa Johnson', 'laryssa.johnson@example.com', '2023-05-15');
call insert_members('Bob Smith', 'bob.smith@example.com', '2023-06-20');
call insert_members('Charlie Brown', 'charlie.brown@example.com', '2023-07-10');
call insert_members('Diana Prince', 'diana.prince@example.com', '2023-08-01');

-- Inserir livros
call insert_books('Harry Potter and the Sorcerers Stone', 1, '1997-06-26', 'Fantasy');
call insert_books('A Game of Thrones', 2, '1996-08-06', 'Fantasy');
call insert_books('The Hobbit', 3, '1937-09-21', 'Fantasy');
call insert_books('Foundation', 4, '1951-06-01', 'Science Fiction');

-- Inserir empréstimos
call insert_loans(1, 1, '2024-01-15', '2024-02-15');
call insert_loans(2, 2, '2024-02-20', '2024-03-20');
call insert_loans(3, 3, '2024-03-10', '2024-04-10');
call insert_loans(4, 4, '2024-04-05', '2024-05-05');