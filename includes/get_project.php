<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');


require_once __DIR__ . '/db_connect.php';

if (empty($_GET['id']) || !is_numeric($_GET['id'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'A valid project id is required.']);
    exit;
}

$project_id = (int) $_GET['id'];


$stmt = mysqli_prepare($connection, "
    SELECT p.id, p.title, p.overview, p.target_audience, p.image, p.alt,
           c.name AS category, r.name AS role
    FROM tbl_project  p
    JOIN tbl_category c ON p.category_id = c.id
    JOIN tbl_role     r ON p.role_id     = r.id
    WHERE p.id = ?
    LIMIT 1
");
mysqli_stmt_bind_param($stmt, 'i', $project_id);
mysqli_stmt_execute($stmt);
$project = mysqli_fetch_assoc(mysqli_stmt_get_result($stmt));
mysqli_stmt_close($stmt);

if (!$project) {
    http_response_code(404);
    echo json_encode(['success' => false, 'error' => 'Project not found.']);
    exit;
}
$project['id'] = (int) $project['id'];


$stmt = mysqli_prepare($connection, "SELECT banner, alt FROM tbl_project_banner WHERE project_id = ? LIMIT 1");
mysqli_stmt_bind_param($stmt, 'i', $project_id);
mysqli_stmt_execute($stmt);
$project['banner'] = mysqli_fetch_assoc(mysqli_stmt_get_result($stmt)) ?: null;
mysqli_stmt_close($stmt);


$stmt = mysqli_prepare($connection, "SELECT images, alt FROM tbl_concept_images WHERE project_id = ? ORDER BY id ASC");
mysqli_stmt_bind_param($stmt, 'i', $project_id);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
$project['concept_images'] = [];
while ($row = mysqli_fetch_assoc($result)) {
    $project['concept_images'][] = $row;
}
mysqli_stmt_close($stmt);


$stmt = mysqli_prepare($connection, "SELECT images, alt FROM tbl_outcome_images WHERE project_id = ? ORDER BY id ASC");
mysqli_stmt_bind_param($stmt, 'i', $project_id);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
$project['outcome_images'] = [];
while ($row = mysqli_fetch_assoc($result)) {
    $project['outcome_images'][] = $row;
}
mysqli_stmt_close($stmt);


$stmt = mysqli_prepare($connection, "
    SELECT t.images, t.alt
    FROM   tbl_tools          t
    JOIN   tbl_projects_tools pt ON pt.tools_id = t.id
    WHERE  pt.project_id = ?
    ORDER BY t.id ASC
");
mysqli_stmt_bind_param($stmt, 'i', $project_id);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
$project['tools'] = [];
while ($row = mysqli_fetch_assoc($result)) {
    $row['images'] = trim($row['images']);
    $project['tools'][] = $row;
}
mysqli_stmt_close($stmt);

mysqli_close($connection);

echo json_encode(['success' => true, 'project' => $project]);