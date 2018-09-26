DELETE * from Ycart where userid = $1;

SELECT * from Ycart c
JOIN Yitems i on
c.product_id = i.id
where c.userid = $1
order by c.product_id;