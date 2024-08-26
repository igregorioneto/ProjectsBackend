-- Liste todos os livros de um autor específico.
select * from "Books" b where b.author_id = 1;
-- Liste todos os membros que pegaram livros emprestados, juntamente com os títulos dos livros.
select m.name as "Name Member", m.email as "Email Member", b.title as "Title Book"
from "Loans" l 
join "Members" m on l.member_id = m.id
join "Books" b on l.book_id = b.id;