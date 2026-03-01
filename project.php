<?php
ini_set('display_error', 1);
ini_set('display_startup,error', 1);
error_reporting(E_ALL);
require_once __DIR__ . '/includes/db_connect.php';


$project_id = (isset($_GET['id']) && ctype_digit((string)$_GET['id'])) ? (int)$_GET['id'] : 0;
if (!$project_id) {
    header('Location: homepage.html');
    exit;
}


$stmt = mysqli_prepare($connection, "
    SELECT p.id, p.title, p.overview, p.target_audience, p.image, p.alt,
           c.name AS category, r.name AS role
    FROM   tbl_project  p
    JOIN   tbl_category c ON p.category_id = c.id
    JOIN   tbl_role     r ON p.role_id     = r.id
    WHERE  p.id = ?
    LIMIT 1
");
mysqli_stmt_bind_param($stmt, 'i', $project_id);
mysqli_stmt_execute($stmt);
$project = mysqli_fetch_assoc(mysqli_stmt_get_result($stmt));
mysqli_stmt_close($stmt);

if (!$project) {
    header('Location: homepage.html');
    exit;
}


$stmt = mysqli_prepare($connection, "
    SELECT banner, alt FROM tbl_project_banner WHERE project_id = ? LIMIT 1
");
mysqli_stmt_bind_param($stmt, 'i', $project_id);
mysqli_stmt_execute($stmt);
$banner = mysqli_fetch_assoc(mysqli_stmt_get_result($stmt));
mysqli_stmt_close($stmt);


$stmt = mysqli_prepare($connection, "
    SELECT images, alt FROM tbl_concept_images WHERE project_id = ? ORDER BY id ASC
");
mysqli_stmt_bind_param($stmt, 'i', $project_id);
mysqli_stmt_execute($stmt);
$concept_images = mysqli_fetch_all(mysqli_stmt_get_result($stmt), MYSQLI_ASSOC);
mysqli_stmt_close($stmt);


$stmt = mysqli_prepare($connection, "
    SELECT images, alt FROM tbl_outcome_images WHERE project_id = ? ORDER BY id ASC
");
mysqli_stmt_bind_param($stmt, 'i', $project_id);
mysqli_stmt_execute($stmt);
$outcome_images = mysqli_fetch_all(mysqli_stmt_get_result($stmt), MYSQLI_ASSOC);
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
$tools = mysqli_fetch_all(mysqli_stmt_get_result($stmt), MYSQLI_ASSOC);
mysqli_stmt_close($stmt);

mysqli_close($connection);


function e(string $v): string {
    return htmlspecialchars($v, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?= e($project['title']) ?> — Andrea Portfolio</title>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/ScrollTrigger.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/ScrollSmoother.min.js"></script>
    <link rel="stylesheet" href="css/grid.css" />
    <link rel="stylesheet" href="css/main.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400..700;1,400..700&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Sanchez:ital@0;1&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />
    <script defer type="module" src="js/main.js"></script>
  </head>

  <body>
    <header class="main-header">
      <div class="grid-con">
        <h1 class="hidden">Andrea Portfolio</h1>
        <div class="col-span-full m-col-span-full l-col-span-full">
          <div class="header-logo col-start-1 col-end-2 l-col-start-1 l-col-end-4">
            <a href="homepage.html">
              <img src="images/andrea_logo.png" alt="A_Logo" />
            </a>
          </div>
          <div class="main-menu grid-con">
            <div class="hamburger col-start-4 col-end-5">
              <svg viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
            </div>
            <div class="menu-header l-col-span-full">
              <nav class="main-nav">
                <ul class="menu-nav">
                  <div class="left-nav">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="index.html#project-sec">Projects</a></li>
                  </div>
                  <div class="nav-logo">
                    <img src="images/andrea_logo.png" alt="A_Logo" />
                  </div>
                  <div class="right-nav">
                    <li><a href="index.html#about">About Me</a></li>
                    <li><a href="index.html#contact">Contact</a></li>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>

   
    <main>
      <section id="project-case" class="case">

        <h2><?= e($project['title']) ?></h2>

       
        <?php if (!empty($banner['banner'])): ?>
          <img class="hero-pro" src="<?= e($banner['banner']) ?>" alt="<?= e($banner['alt']) ?>" />
        <?php elseif (!empty($project['image'])): ?>
          <img class="hero-pro" src="<?= e($project['image']) ?>" alt="<?= e($project['alt']) ?>" />
        <?php endif; ?>

      
        <div class="project-meta">
          <span class="project-category"><?= e($project['category']) ?></span>
          &nbsp;·&nbsp;
          <span class="project-role"><?= e($project['role']) ?>: An Do</span>
        </div>

       
        <div class="divider"></div>
        <h3 class="case-title">OVERVIEW</h3>
        <p class="case-tex"><?= nl2br(e($project['overview'])) ?></p>

        
        <div class="divider"></div>
        <h3 class="case-title">TARGET AUDIENCE</h3>
        <p><?= nl2br(e($project['target_audience'])) ?></p>

        
        <?php if (!empty($concept_images)): ?>
          <div class="divider"></div>
          <h3 class="case-title">CONCEPT DEVELOPMENT</h3>
          <div class="photos">
            <?php foreach ($concept_images as $img): ?>
              <img src="<?= e($img['images']) ?>" alt="<?= e($img['alt']) ?>" loading="lazy" />
            <?php endforeach; ?>
          </div>
        <?php endif; ?>

        
        <?php if (!empty($outcome_images)): ?>
          <div class="divider"></div>
          <h3 class="case-title">OUTCOMES</h3>
          <div class="photos outcome">
            <?php foreach ($outcome_images as $img): ?>
              <img src="<?= e($img['images']) ?>" alt="<?= e($img['alt']) ?>" loading="lazy" />
            <?php endforeach; ?>
          </div>
        <?php endif; ?>

       
        <?php if (!empty($tools)): ?>
          <div class="divider"></div>
          <h3 class="case-title">TOOLS USED</h3>
          <div class="photo-icons">
            <?php foreach ($tools as $tool): ?>
              <img src="<?= e(trim($tool['images'])) ?>" alt="<?= e($tool['alt']) ?>" loading="lazy" />
            <?php endforeach; ?>
          </div>
        <?php endif; ?>

       
        <div class="back-btn-wrap">
          <a href="homepage.html#project-sec" class="resume">← Back to Projects</a>
        </div>

      </section>
    </main>

    
    <div class="divider"></div>
    <footer id="footer-main">
      <div class="grid-con">
        <div class="footer-logo col-span-full">
          <img src="images/andrea_logo.png" alt="a_logo" />
        </div>
        <section class="box-sap">
          <div class="social-media full-width-grid-con">
            <ul class="social-links">
              <li><a href="https://github.com/AndreaDo1201/"><i class="fab fa-github icon"></i></a></li>
              <li><a href="https://www.instagram.com/eidolionshine"><i class="fab fa-instagram icon"></i></a></li>
              <li><a href="https://www.linkedin.com/in/an-do-67b07539b/"><i class="fab fa-linkedin-in icon"></i></a></li>
              <li><a href="https://www.behance.net/andreado1201"><i class="fab fa-behance icon"></i></a></li>
            </ul>
          </div>
        </section>
        <div class="col-span-full">
          <p>&copy; 2025 An Ngoc Nhu Do</p>
        </div>
      </div>
    </footer>
  </body>
</html>