DELETE from Ycart 
WHERE userid = $1 and product_id = $2;

INSERT INTO Ycart(
  userid,
  product_id,
  quantity
)
VALUES(
  $1,
  $2,
  $3
);

SELECT * from Ycart c
JOIN Yitems i on
c.product_id = i.id
where c.userid = $1
order by c.product_id;