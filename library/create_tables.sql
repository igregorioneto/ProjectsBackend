create table "Authors" (
	id SERIAL primary key,
	name varchar(255) not null,
	birthdate DATE
);

create table "Members" (
	id SERIAL primary key,
	name varchar(255) not null,
	email varchar(255) not null,
	join_date DATE not null
);

create table "Books" (
	id SERIAL primary key,
	title varchar(255) not null,
	author_id int not null,
	published_year DATE not null,
	genre varchar(80) not null,
	foreign key (author_id) references "Authors"(id)
);

create table "Loans" (
	id SERIAL primary key,
	book_id int not null,
	member_id int not null,
	loan_date DATE not null,
	return_date DATE,
	foreign key (book_id) references "Books" (id),
	foreign key (member_id) references "Members" (id)
);