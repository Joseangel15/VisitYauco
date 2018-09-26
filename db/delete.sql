DELETE from Ycart
where userid = $1 and product_id = $2;

SELECT * from Ycart c
JOIN Yitems i on
c.product_id = i.id
where c.userid = $1
order by c.product_id;