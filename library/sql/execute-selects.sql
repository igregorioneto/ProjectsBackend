-- Liste todos os livros de um autor específico.
select * from "Books" b where b.author_id = 1;
-- Liste todos os membros que pegaram livros emprestados, juntamente com os títulos dos livros.
select m.name as "Name Member", m.email as "Email Member", b.title as "Title Book"
from "Loans" l 
join "Members" m on l.member_id = m.id
join "Books" b on l.book_id = b.id;
-- Conte o número total de livros emprestados atualmente.
select COUNT(*) 
from "Loans" l 
join "Books" b on l.book_id = b.id;
-- Liste todos os livros que ainda não foram devolvidos, juntamente com as informações do membro que pegou emprestado.
select m."name" , b.title 
from "Loans" l 
join "Books" b ON l.book_id = b.id
join "Members" m on l.member_id = m.id
where l.return_date is null or l.return_date < '2024-04-10'
group by m."name" , b.title ;
-- Liste os membros que pegaram mais de 2 livros emprestados.
select m.*
from "Loans" l 
join "Members" m on l.member_id = m.id
group by m.id 
having count(l.id) > 2;

select *
from "Members" m 
where (
	select count(*) 
	from "Loans" l 
	where l.member_id = m.id
) > 2;

-- Reviews selects
-- Liste todas as avaliações feitas por um determinado membro, incluindo o título do livro e a avaliação.
select r.id, r.rating , b.title , m."name" 
from "Reviews" r 
join "Books" b on r.book_id = b.id 
join "Members" m on r.member_id = m.id 
where r.member_id = 1
group by r.id , r.rating, b.title, m."name";

-- Calcule a média das avaliações de cada livro.
select AVG(r.rating) as media, b.title 
from "Reviews" r 
join "Books" b ON r.book_id = b.id
join "Members" m on r.member_id = m.id
group by r.rating, b.title
order by media DESC;