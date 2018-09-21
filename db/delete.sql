DELETE from Ycart
where id = $1;

SELECT * from Ycart c
JOIN Yitems i on
c.product_id = i.id
where c.userid = $2
order by c.product_id;