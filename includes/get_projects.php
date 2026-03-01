<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');


require_once __DIR__ . '/db_connect.php';

$where  = [];
$params = [];
$types  = '';

if (!empty($_GET['category_id']) && is_numeric($_GET['category_id'])) {
    $where[]  = 'p.category_id = ?';
    $params[] = (int) $_GET['category_id'];
    $types   .= 'i';
}

$where_sql = count($where) ? 'WHERE ' . implode(' AND ', $where) : '';

$limit_sql = '';
if (!empty($_GET['limit']) && is_numeric($_GET['limit'])) {
    $limit_sql = 'LIMIT ' . (int) $_GET['limit'];
}

$sql = "
    SELECT
        p.id,
        p.title,
        p.image,
        p.alt,
        c.name AS category,
        r.name AS role
    FROM tbl_project  p
    JOIN tbl_category c ON p.category_id = c.id
    JOIN tbl_role     r ON p.role_id     = r.id
    $where_sql
    ORDER BY p.id ASC
    $limit_sql
";

$stmt = mysqli_prepare($connection, $sql);

if ($params) {
    mysqli_stmt_bind_param($stmt, $types, ...$params);
}

mysqli_stmt_execute($stmt);
$result   = mysqli_stmt_get_result($stmt);
$projects = [];

while ($row = mysqli_fetch_assoc($result)) {
    $row['id'] = (int) $row['id'];
    $projects[] = $row;
}

mysqli_stmt_close($stmt);
mysqli_close($connection);

echo json_encode([
    'success'  => true,
    'count'    => count($projects),
    'projects' => $projects
]);
