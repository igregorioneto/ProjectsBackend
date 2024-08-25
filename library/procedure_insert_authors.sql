-- Inserindo valores (Procedures)
create or replace procedure insert_authors(
	p_name varchar(255),
	p_birthdate DATE
)
language plpgsql
as $$
begin 
	insert into "Authors" (name, birthdate)
	values (p_name, p_birthdate);
end;
$$;

call insert_authors('Marco Tulio Valente', '2022-01-01');
select * from "Authors" a;