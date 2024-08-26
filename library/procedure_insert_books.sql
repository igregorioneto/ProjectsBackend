create or replace procedure insert_books(
	p_title varchar(255),
	p_author_id int,
	p_published_year DATE,
	p_genre varchar(80)
)
language plpgsql
as $$
begin 
	insert into "Books" (title, author_id, published_year, genre)
	values (p_title, p_author_id, p_published_year, p_genre);
end;
$$;