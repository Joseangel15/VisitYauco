INSERT INTO Yusers
(auth_id, user_name, user_pic, given_name, family_name, email)
VALUES
($1, $2, $3, $4, $5, $6)
RETURNING *;