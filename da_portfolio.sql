-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2026 at 08:01 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `da_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

CREATE TABLE `tbl_category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`id`, `name`) VALUES
(1, 'BRAND DESIGN'),
(2, 'ANIMATION'),
(3, 'GRAPHIC DESIGN'),
(4, 'CHARACTER DESIGN'),
(5, 'MOTION DESIGN');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_concept_images`
--

CREATE TABLE `tbl_concept_images` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `images` varchar(225) NOT NULL,
  `alt` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_concept_images`
--

INSERT INTO `tbl_concept_images` (`id`, `project_id`, `images`, `alt`) VALUES
(1, 1, 'images/oju-1.png', 'img1'),
(2, 1, 'images/oju-2.png', 'img2'),
(3, 1, 'images/oju-3.png', 'img3'),
(4, 1, 'images/oju-4.png', 'img4'),
(5, 1, 'images/oju-5.png', 'img5'),
(6, 1, 'images/oju-6.png', 'img6'),
(7, 2, 'images/bin-1.png', 'img1'),
(8, 2, 'images/bin-2.png', 'img2'),
(9, 2, 'images/bin-3.png', 'img3'),
(10, 2, 'images/bin-4.png', 'img4'),
(11, 2, 'images/bin-5.png', 'img5'),
(12, 2, 'images/bin-6.png', 'img6'),
(13, 3, 'images/orbitz-1.png', 'img1'),
(14, 3, 'images/orbitz-2.png', 'img2'),
(15, 3, 'images/orbitz-3.png', 'img3'),
(16, 3, 'images/orbitz-4.png', 'img4'),
(17, 3, 'images/orbitz-5.png', 'img5'),
(18, 3, 'images/orbitz-6.png', 'img6'),
(19, 4, 'images/none-1.png', 'img1'),
(20, 4, 'images/none-2.png', 'img2'),
(21, 4, 'images/none-3.png', 'img3'),
(22, 4, 'images/none-4.png', 'img4'),
(23, 4, 'images/none-5.png', 'img5'),
(24, 4, 'images/none-6.png', 'img6'),
(25, 5, 'images/seven-1.png', 'img1'),
(26, 5, 'images/seven-2.png', 'img2'),
(27, 5, 'images/seven-3.png', 'img3'),
(28, 5, 'images/seven-4.png', 'img4'),
(29, 5, 'images/seven-5.png', 'img5'),
(30, 5, 'images/seven-6.png', 'img6'),
(31, 6, 'images/baemin-1.png', 'img1'),
(32, 6, 'images/baemin-2.png', 'img2'),
(33, 6, 'images/baemin-3.png', 'img3'),
(34, 6, 'images/baemin-4.png', 'img4'),
(35, 6, 'images/baemin-5.png', 'img5'),
(36, 6, 'images/baemin-6.png', 'img6'),
(37, 7, 'images/vtuber-coming-soon.png', 'coming-img');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contact`
--

CREATE TABLE `tbl_contact` (
  `user_id` int(10) UNSIGNED NOT NULL,
  `username` varchar(155) NOT NULL,
  `email` varchar(155) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_outcome_images`
--

CREATE TABLE `tbl_outcome_images` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `images` varchar(225) NOT NULL,
  `alt` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_outcome_images`
--

INSERT INTO `tbl_outcome_images` (`id`, `project_id`, `images`, `alt`) VALUES
(1, 1, 'images/oju-7.png', 'img7'),
(2, 1, 'images/oju-8.png', 'img8'),
(3, 1, 'images/oju-9.png', 'img9'),
(4, 1, 'images/oju-10.png', 'img10'),
(5, 1, 'images/oju-11.png', 'img11'),
(6, 1, 'images/oju-12.png', 'img12'),
(7, 2, 'images/bin-7.png', 'img7'),
(8, 2, 'images/bin-8.png', 'img8'),
(9, 2, 'images/bin-9.png', 'img9'),
(10, 2, 'images/bin-10.png', 'img10'),
(11, 2, 'images/bin-11.png', 'img11'),
(12, 2, 'images/bin-12.png', 'img12'),
(13, 3, 'images/orbitz-7.png', 'img7'),
(14, 3, 'images/orbitz-8.png', 'img8'),
(15, 3, 'images/orbitz-9.png', 'img9'),
(16, 3, 'images/orbitz-10.png', 'img10'),
(17, 3, 'images/orbitz-11.png', 'img11'),
(18, 3, 'images/orbitz-12.png', 'img12'),
(19, 4, 'images/none-7.png', 'img7'),
(20, 4, 'images/none-8.png', 'img8'),
(21, 4, 'images/none-9.png', 'img9'),
(22, 4, 'images/none-10.png', 'img10'),
(23, 4, 'images/none-11.png', 'img11'),
(24, 4, 'images/none-12.png', 'img12'),
(25, 5, 'images/seven-7.png', 'img7'),
(26, 5, 'images/seven-8.png', 'img8'),
(27, 5, 'images/seven-9.png', 'img9'),
(28, 5, 'images/seven-10.png', 'img10'),
(29, 5, 'images/seven-11.png', 'img11'),
(30, 5, 'images/seven-12.png', 'img12'),
(31, 6, 'images/baemin-7.png', 'img7'),
(32, 6, 'images/baemin-8.png', 'img8'),
(33, 6, 'images/baemin-9.png', 'img9'),
(34, 6, 'images/baemin-10.png', 'img10'),
(35, 6, 'images/baemin-11.png', 'img11'),
(36, 6, 'images/baemin-12.png', 'img12'),
(37, 7, 'images/vtuber-coming-soon.png', 'coming-img');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_project`
--

CREATE TABLE `tbl_project` (
  `id` int(11) NOT NULL,
  `title` varchar(225) NOT NULL,
  `overview` text NOT NULL,
  `target_audience` text NOT NULL,
  `image` varchar(225) NOT NULL,
  `alt` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_project`
--

INSERT INTO `tbl_project` (`id`, `title`, `overview`, `target_audience`, `image`, `alt`, `category_id`, `role_id`) VALUES
(1, 'OJU- A Better Juice, A Better Life', 'OJU is an organic juice brand designed to embody freshness, vitality, and a youthful lifestyle. The logo integrates visual elements inspired by natural ingredients, reinforcing the brand’s commitment to health and authenticity. A vibrant, nature-driven color palette was carefully selected to appeal to a young, energetic audience while communicating freshness and positivity.\nThe custom sans-serif typography features softly rounded terminals, creating a friendly and dynamic personality. This typographic choice avoids rigidity and instead reflects approachability, movement, and modernity—aligning with the brand’s youthful spirit and active target market.', 'OJU targets health-conscious, clean-living individuals who prioritize natural ingredients and mindful consumption. The brand appeals to young adults who value wellness, sustainability, and transparency in the products they choose. They are active, socially aware consumers who seek beverages that align with their healthy lifestyle while still feeling modern and aesthetically appealing.', 'images/project_1.png', '', 1, 1),
(2, 'Bin\' Treasure', 'This short animation film is about Bin, a city boy who is very much involved in modern-day city culture and entertainment. When he goes to his hometown on Lunar New Year’s Eve to visit his grandmother, he is forced to confront memories that he had been suppressing all this time because of his busy city life.\r\n\r\nThis animation film is about Bin’s experience, and through this, we get to learn about the contrast between modern-day city culture and one’s own culture, which is very sentimental and traditional. The animation film also teaches one about reconnecting to one’s culture and learning more about one’s own self through one’s memories.', 'This animated film is suitable for both the younger generation, including children and youth, as well as adults who live away from their families. For the younger generation, including children and youth, it is possible to view this film as a story for educational purposes while also touching on a theme of emotion. For instance, children can learn from Bin’s life how to cherish their roots and understand the importance of staying connected to their families.\r\n\r\nFor the older generation, including adults who live away from their families due to various reasons, including education and work, it is possible to view this film as touching on a theme that is likely to evoke a greater degree of emotion within them. It is possible to view this film as a story based on the experience of living away from home as well as re-experiencing childhood memories during a major event such as Lunar New Year.', 'images/project_2.png', '', 2, 2),
(3, 'Orbitz - The Taste Out The Space', 'The original drink, Orbitz, was introduced to the market in the 1990s in Canada. It was introduced as a unique fruit flavor drink that is not carbonated. Instead, it contains gel-like beads. The drink, introduced by the Clearly Food & Beverage Company, is described as a “texturally enhanced alternative beverage.”\r\n\r\nIn the redesign project, the aim is to reinvent the Orbitz drink as a new brand, giving it a new look that will appeal to today’s consumers while maintaining the unique qualities of the original drink. This project will aim to reinvent the original drink to appeal to today’s consumers as a unique drink with a nostalgic appeal.', 'The target market for the revised version of the energy drink, Orbitz, includes working professionals and fitness enthusiasts who are between 20 to 35 years old and who live a fast-paced lifestyle. The target market includes working professionals who live busy and demanding lifestyles, as well as fitness enthusiasts who go to the gym and who want to maintain their energy level while living their active lifestyles.\r\n\r\nThey are function-oriented, performance-driven, and convenience-oriented consumers who are also image-oriented. They are consumers who are attracted to brands that are edgy, bold, and contemporary in their look, personality, and style. They are also consumers who are health-oriented and productivity-oriented, who want to achieve peak mental and physical performance, and who want to live a peak lifestyle. The revised version of the brand, Orbitz, is energetic, dynamic, ambitious, active, and lifestyle-oriented.', 'images/project_3.png', '', 1, 1),
(4, '無 \"None\"- Oracle Card', 'This Oracle Deck, which is influenced by Japanese culture, combines traditional folklore and mythology with contemporary themes. The Oracle Deck draws its inspiration from the Taisho period (1912-1926), a time when Western culture was influencing Japan. The Oracle Deck draws its inspiration from a time of cultural change in Japan’s history.\r\n\r\nThis Oracle Deck combines traditional mythical symbolism with contemporary themes, and its cards are symbolic of traditional culture and contemporary society because they are all themed around the concept of self, change, and evolution.', 'This Oracle deck is intended for use by people who are passionate about tarot cards and spirituality, as well as those who are interested in introspection and symbolic storytelling. The intended audience for this Oracle deck consists of spiritually inquisitive users who are interested in using divination cards as a means of reflection, guidance, and personal growth.\r\n\r\nThe Oracle deck is also intended for users who are enthusiasts of Japanese myth and mystery art, i.e., those who are interested in dark and atmospheric art that draws from cultural folklore. The Oracle deck’s blend of spirituality and dark, atmospheric art draws from users who are not only spiritually active but also those who are interested in Japanese art and mystery.', 'images/project_4.png', '', 1, 3),
(5, 'Seven or 7', 'Seven or 7 is a cosmetic brand that is reimagined with a minimalist aesthetic. The brand’s redesign emphasizes purity, harmony, and refined simplicity, reflecting the brand’s commitment to clean beauty. The logo redesign incorporates bold typography, giving it a confident feel. At the same time, the typography is not overly complex, giving it a clear look. The color palette is also simplistic, with a connection to the outdoors. This connection helps the brand stand out as a refined beauty brand with a connection to the outdoors. It appeals to consumers who appreciate both simplicity and substance.', 'Seven or 7 is a target for modern, mindful consumers who are between the ages of 20 to 60 years old and are concerned about clean ingredients, the environment, and minimalism.\r\n\r\nYoung professionals and beauty enthusiasts are considered to be the target consumers for Seven, who are highly concerned about self-care but also value authenticity from the brand’s offerings.\r\n\r\nThe target consumers for Seven are visual-driven consumers who value refined, subtle branding that is similar to their lifestyle, which is simple, uncluttered, balanced, effortless beauty, not glamorous beauty. Seven is a brand for people who embody confidence through simplicity.', 'images/project_5.png', '', 1, 1),
(6, 'BAEMIN', 'BAEMIN is a leading food delivery service that has gained recognition for its playful personality, bold typography, and association with younger, urban consumers. For this assignment, we created a conceptual campaign for Lunar New Year that honors traditional values while maintaining the youthful, dynamic personality that BAEMIN has come to embody.\r\n\r\nThe campaign redefines Lunar New Year as a time for connection, convenience, and celebration through food. By integrating traditional cultural elements such as good fortune color schemes, illustrative motifs, and traditional imagery with BAEMIN’s signature quirky style, the campaign reinvents a new experience for the Lunar New Year holiday.', 'The primary audience for this Lunar New Year campaign for BAEMIN is young women aged 16–25 living in Ho Chi Minh City, with a monthly income starting from 5 million VND.\r\n\r\nThey are active online shoppers who enjoy trendy products and value convenience. They care about maintaining a healthy lifestyle while still enjoying seasonal treats. Digital-savvy and socially connected, they are drawn to visually appealing, fun, and shareable campaigns—especially during festive occasions like Lunar New Year.', 'images/project_6.png', '', 1, 3),
(7, 'Vtuber - Upcoming Project', 'Coming Soon', 'Coming Soon', 'images/project_7.png', '', 4, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_project_banner`
--

CREATE TABLE `tbl_project_banner` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `banner` varchar(225) NOT NULL,
  `alt` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_project_banner`
--

INSERT INTO `tbl_project_banner` (`id`, `project_id`, `banner`, `alt`) VALUES
(1, 1, 'images/oju-main.png', 'banner-img'),
(2, 2, 'images/bin-main.png', 'banner-img'),
(3, 3, 'images/orbitz-main.png', 'banner-img'),
(4, 4, 'images/none-main.png', 'banner-img'),
(5, 5, 'image/seven-main.png', 'banner-main'),
(6, 6, 'images/baemin-main.png', 'banner-img'),
(7, 7, 'images/coming-banner.png', 'banner-img');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_role`
--

CREATE TABLE `tbl_role` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_role`
--

INSERT INTO `tbl_role` (`id`, `name`) VALUES
(1, 'Designer'),
(2, 'Animator'),
(3, 'Artist');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tools`
--

CREATE TABLE `tbl_tools` (
  `id` int(11) NOT NULL,
  `images` varchar(500) NOT NULL,
  `alt` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_tools`
--

INSERT INTO `tbl_tools` (`id`, `images`, `alt`) VALUES
(1, 'images/photoshop.png\r\n', 'photoshop'),
(2, 'images/illustrator.png', 'illustrator'),
(3, 'images/after-effects.png', 'after-effect'),
(4, 'images/indesign.png', 'indesign'),
(5, 'images/clip-studio-paint.png', 'csp'),
(6, 'images/figma.png', 'figma'),
(7, 'images/blender-3d.png', 'blender'),
(8, 'images/cinema-4d.png', 'cinema-4d');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_concept_images`
--
ALTER TABLE `tbl_concept_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `tbl_outcome_images`
--
ALTER TABLE `tbl_outcome_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_project`
--
ALTER TABLE `tbl_project`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_project_banner`
--
ALTER TABLE `tbl_project_banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_role`
--
ALTER TABLE `tbl_role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_tools`
--
ALTER TABLE `tbl_tools`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_concept_images`
--
ALTER TABLE `tbl_concept_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
  MODIFY `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_outcome_images`
--
ALTER TABLE `tbl_outcome_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `tbl_project`
--
ALTER TABLE `tbl_project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_project_banner`
--
ALTER TABLE `tbl_project_banner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_role`
--
ALTER TABLE `tbl_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_tools`
--
ALTER TABLE `tbl_tools`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
