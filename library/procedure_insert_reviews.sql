create or replace procedure insert_review(
	p_book_id int,
	p_member_id int,
	p_rating int,
	p_comment_member varchar(255)
)
language plpgsql
as $$
begin 
	insert into "Reviews" (book_id, member_id, rating, comment_member)
	values (p_book_id, p_member_id, p_rating, p_comment_member);
end;
$$;