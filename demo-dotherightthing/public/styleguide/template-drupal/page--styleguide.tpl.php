<!-- DOCTYPE, HTML, HEAD + ASSETS, BODY, HEADER, NAV ETC -->

<?php
    // START KSS STYLEGUIDE

    global $styleguide_site_root;
    global $styleguide_section;
    global $styleguide_folder_path;

    $styleguide_site_root = $_SERVER['DOCUMENT_ROOT'];
    $styleguide_section = isset($_GET['section']) ? $_GET['section'] : ''; // &section=['', or '1', '2', '3' etc]

    // START EDIT
    $styleguide_folder_path = '/demo-dotherightthing/public/styleguide';
    // END EDIT

    include( $styleguide_site_root . $styleguide_folder_path . '/template/importer.php' );

    // END KSS STYLEGUIDE
?>

<!-- FOOTER, /BODY, /HTML -->
