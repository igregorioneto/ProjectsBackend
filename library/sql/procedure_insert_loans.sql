create or replace procedure insert_loans(
	p_book_id int,
	p_member_id int,
	p_loan_date DATE,
	p_return_date DATE
)
language plpgsql
as $$
begin 
	insert into "Loans" (book_id, member_id, loan_date, return_date)
	values (p_book_id, p_member_id, p_loan_date, p_return_date);
end;
$$;