create or replace procedure insert_members(
	p_name varchar(255),
	p_email varchar(255),
	p_join_date DATE
)
language plpgsql
as $$
begin 
	insert into "Members" (name, email, join_date)
	values (p_name, p_email, p_join_date);
end;
$$;