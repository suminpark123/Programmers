SELECT BOOK_ID,to_char(published_date,'YYYY-MM-DD') as published_date
FROM book
WHERE CATEGORY = '인문' AND to_char(published_date,'YYYY-MM-DD')LIKE '2021%'
ORDER BY PUBLISHED_DATE ASC;