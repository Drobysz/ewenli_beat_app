-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 05, 2025 at 09:26 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ewenli_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `baskets`
--

CREATE TABLE `baskets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `beat_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `baskets`
--

INSERT INTO `baskets` (`id`, `user_id`, `beat_id`) VALUES
(8, 10, 18),
(9, 10, 23),
(10, 10, 12),
(11, 10, 9),
(32, 8, 9),
(33, 8, 8),
(34, 8, 18),
(36, 8, 21),
(38, 8, 25),
(39, 8, 22),
(41, 12, 18),
(42, 12, 9),
(43, 13, 18),
(44, 13, 13),
(45, 13, 9),
(46, 13, 19);

-- --------------------------------------------------------

--
-- Table structure for table `beats`
--

CREATE TABLE `beats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `stripe_price_id` varchar(255) DEFAULT NULL,
  `categories` enum('digicore','hyperpop','scenecore','EDM','2010 pop','house','100 gecs','hard hyperpop') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `beats`
--

INSERT INTO `beats` (`id`, `name`, `price`, `stripe_price_id`, `categories`) VALUES
(8, 'yums', 20, 'price_1RWQmbGdDgg9JXufAOU5OXAz', 'EDM'),
(9, '7zip', 18, 'price_1RWQj3GdDgg9JXufXZMpCgN3', 'digicore'),
(10, 'betrayal', 19, 'price_1RWQlLGdDgg9JXuf8wxGJqlN', 'hyperpop'),
(11, 'bless', 21, 'price_1RWQnzGdDgg9JXufzi59Ntir', 'digicore'),
(12, 'bloodlust', 22, 'price_1RWQpqGdDgg9JXufKczc0EQT', 'digicore'),
(13, 'candy', 17, 'price_1RWQi1GdDgg9JXuf3oyB3mbl', 'hyperpop'),
(14, 'cold hearted', 19, 'price_1RWQlnGdDgg9JXuf700OTx8L', 'scenecore'),
(15, 'crystal dreams', 21, 'price_1RWQoXGdDgg9JXufp5zA0lDM', 'digicore'),
(16, 'devil', 24, 'price_1RWQrUGdDgg9JXuflyHaYHNm', 'hard hyperpop'),
(17, 'dollars', 22, 'price_1RWQqHGdDgg9JXufNu3wSg5X', '2010 pop'),
(18, 'feelings', 16, 'price_1RWQh8GdDgg9JXuf2ymmKPGY', 'digicore'),
(19, 'frosty', 18, 'price_1RWQk3GdDgg9JXufvVMbLhYX', 'hyperpop'),
(20, 'funky', 22, 'price_1RWQqyGdDgg9JXufHotgqaGh', 'digicore'),
(21, 'gloss', 21, 'price_1RWQp0GdDgg9JXufX4t9mDAs', 'digicore'),
(22, 'happy', 21, 'price_1RWQpOGdDgg9JXuf1PrYAWBV', '2010 pop'),
(23, 'hollow', 18, 'price_1RWQkaGdDgg9JXuf3SWHKt0L', 'hyperpop'),
(24, 'iceberg', 20, 'price_1RWQnXGdDgg9JXufqdRp1wJD', 'digicore'),
(25, 'lusty devils', 19, 'price_1RWQmKGdDgg9JXufcPfe1kaf', 'scenecore');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('laravel_cache_beats', 'O:39:\"Illuminate\\Database\\Eloquent\\Collection\":2:{s:8:\"\0*\0items\";a:18:{i:0;O:15:\"App\\Models\\Beat\":31:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:5:\"beats\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:4:{s:2:\"id\";i:8;s:4:\"name\";s:4:\"yums\";s:5:\"price\";i:20;s:10:\"categories\";s:3:\"EDM\";}s:11:\"\0*\0original\";a:4:{s:2:\"id\";i:8;s:4:\"name\";s:4:\"yums\";s:5:\"price\";i:20;s:10:\"categories\";s:3:\"EDM\";}s:10:\"\0*\0changes\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:10:\"timestamps\";b:0;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:4:\"name\";i:1;s:5:\"price\";i:2;s:10:\"categories\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:1;O:15:\"App\\Models\\Beat\":31:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:5:\"beats\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:4:{s:2:\"id\";i:9;s:4:\"name\";s:4:\"7zip\";s:5:\"price\";i:18;s:10:\"categories\";s:8:\"digicore\";}s:11:\"\0*\0original\";a:4:{s:2:\"id\";i:9;s:4:\"name\";s:4:\"7zip\";s:5:\"price\";i:18;s:10:\"categories\";s:8:\"digicore\";}s:10:\"\0*\0changes\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:10:\"timestamps\";b:0;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:4:\"name\";i:1;s:5:\"price\";i:2;s:10:\"categories\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:2;O:15:\"App\\Models\\Beat\":31:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:5:\"beats\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:4:{s:2:\"id\";i:10;s:4:\"name\";s:8:\"betrayal\";s:5:\"price\";i:19;s:10:\"categories\";s:8:\"hyperpop\";}s:11:\"\0*\0original\";a:4:{s:2:\"id\";i:10;s:4:\"name\";s:8:\"betrayal\";s:5:\"price\";i:19;s:10:\"categories\";s:8:\"hyperpop\";}s:10:\"\0*\0changes\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:10:\"timestamps\";b:0;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:4:\"name\";i:1;s:5:\"price\";i:2;s:10:\"categories\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:3;O:15:\"App\\Models\\Beat\":31:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:5:\"beats\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:4:{s:2:\"id\";i:11;s:4:\"name\";s:5:\"bless\";s:5:\"price\";i:21;s:10:\"categories\";s:8:\"digicore\";}s:11:\"\0*\0original\";a:4:{s:2:\"id\";i:11;s:4:\"name\";s:5:\"bless\";s:5:\"price\";i:21;s:10:\"categories\";s:8:\"digicore\";}s:10:\"\0*\0changes\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:10:\"timestamps\";b:0;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:4:\"name\";i:1;s:5:\"price\";i:2;s:10:\"categories\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:4;O:15:\"App\\Models\\Beat\":31:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:5:\"beats\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:4:{s:2:\"id\";i:12;s:4:\"name\";s:9:\"bloodlust\";s:5:\"price\";i:22;s:10:\"categories\";s:8:\"digicore\";}s:11:\"\0*\0original\";a:4:{s:2:\"id\";i:12;s:4:\"name\";s:9:\"bloodlust\";s:5:\"price\";i:22;s:10:\"categories\";s:8:\"digicore\";}s:10:\"\0*\0changes\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:10:\"timestamps\";b:0;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:4:\"name\";i:1;s:5:\"price\";i:2;s:10:\"categories\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:5;O:15:\"App\\Models\\Beat\":31:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:5:\"beats\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:4:{s:2:\"id\";i:13;s:4:\"name\";s:5:\"candy\";s:5:\"price\";i:17;s:10:\"categories\";s:8:\"hyperpop\";}s:11:\"\0*\0original\";a:4:{s:2:\"id\";i:13;s:4:\"name\";s:5:\"candy\";s:5:\"price\";i:17;s:10:\"categories\";s:8:\"hyperpop\";}s:10:\"\0*\0changes\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:10:\"timestamps\";b:0;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:4:\"name\";i:1;s:5:\"price\";i:2;s:10:\"categories\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:6;O:15:\"App\\Models\\Beat\":31:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:5:\"beats\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:4:{s:2:\"id\";i:14;s:4:\"name\";s:12:\"cold hearted\";s:5:\"price\";i:19;s:10:\"categories\";s:9:\"scenecore\";}s:11:\"\0*\0original\";a:4:{s:2:\"id\";i:14;s:4:\"name\";s:12:\"cold hearted\";s:5:\"price\";i:19;s:10:\"categories\";s:9:\"scenecore\";}s:10:\"\0*\0changes\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:10:\"timestamps\";b:0;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:4:\"name\";i:1;s:5:\"price\";i:2;s:10:\"categories\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:7;O:15:\"App\\Models\\Beat\":31:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:5:\"beats\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:4:{s:2:\"id\";i:15;s:4:\"name\";s:14:\"crystal dreams\";s:5:\"price\";i:21;s:10:\"categories\";s:8:\"digicore\";}s:11:\"\0*\0original\";a:4:{s:2:\"id\";i:15;s:4:\"name\";s:14:\"crystal dreams\";s:5:\"price\";i:21;s:10:\"categories\";s:8:\"digicore\";}s:10:\"\0*\0changes\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:10:\"timestamps\";b:0;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:4:\"name\";i:1;s:5:\"price\";i:2;s:10:\"categories\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:8;O:15:\"App\\Models\\Beat\":31:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:5:\"beats\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:4:{s:2:\"id\";i:16;s:4:\"name\";s:5:\"devil\";s:5:\"price\";i:24;s:10:\"categories\";s:13:\"hard hyperpop\";}s:11:\"\0*\0original\";a:4:{s:2:\"id\";i:16;s:4:\"name\";s:5:\"devil\";s:5:\"price\";i:24;s:10:\"categories\";s:13:\"hard hyperpop\";}s:10:\"\0*\0changes\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:10:\"timestamps\";b:0;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:4:\"name\";i:1;s:5:\"price\";i:2;s:10:\"categories\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:9;O:15:\"App\\Models\\Beat\":31:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:5:\"beats\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:4:{s:2:\"id\";i:17;s:4:\"name\";s:7:\"dollars\";s:5:\"price\";i:22;s:10:\"categories\";s:8:\"2010 pop\";}s:11:\"\0*\0original\";a:4:{s:2:\"id\";i:17;s:4:\"name\";s:7:\"dollars\";s:5:\"price\";i:22;s:10:\"categories\";s:8:\"2010 pop\";}s:10:\"\0*\0changes\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:10:\"timestamps\";b:0;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:4:\"name\";i:1;s:5:\"price\";i:2;s:10:\"categories\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:10;O:15:\"App\\Models\\Beat\":31:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:5:\"beats\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:4:{s:2:\"id\";i:18;s:4:\"name\";s:8:\"feelings\";s:5:\"price\";i:16;s:10:\"categories\";s:8:\"digicore\";}s:11:\"\0*\0original\";a:4:{s:2:\"id\";i:18;s:4:\"name\";s:8:\"feelings\";s:5:\"price\";i:16;s:10:\"categories\";s:8:\"digicore\";}s:10:\"\0*\0changes\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:10:\"timestamps\";b:0;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:4:\"name\";i:1;s:5:\"price\";i:2;s:10:\"categories\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:11;O:15:\"App\\Models\\Beat\":31:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:5:\"beats\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:4:{s:2:\"id\";i:19;s:4:\"name\";s:6:\"frosty\";s:5:\"price\";i:18;s:10:\"categories\";s:8:\"hyperpop\";}s:11:\"\0*\0original\";a:4:{s:2:\"id\";i:19;s:4:\"name\";s:6:\"frosty\";s:5:\"price\";i:18;s:10:\"categories\";s:8:\"hyperpop\";}s:10:\"\0*\0changes\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:10:\"timestamps\";b:0;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:4:\"name\";i:1;s:5:\"price\";i:2;s:10:\"categories\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:12;O:15:\"App\\Models\\Beat\":31:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:5:\"beats\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:4:{s:2:\"id\";i:20;s:4:\"name\";s:5:\"funky\";s:5:\"price\";i:22;s:10:\"categories\";s:8:\"digicore\";}s:11:\"\0*\0original\";a:4:{s:2:\"id\";i:20;s:4:\"name\";s:5:\"funky\";s:5:\"price\";i:22;s:10:\"categories\";s:8:\"digicore\";}s:10:\"\0*\0changes\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:10:\"timestamps\";b:0;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:4:\"name\";i:1;s:5:\"price\";i:2;s:10:\"categories\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:13;O:15:\"App\\Models\\Beat\":31:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:5:\"beats\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:4:{s:2:\"id\";i:21;s:4:\"name\";s:5:\"gloss\";s:5:\"price\";i:21;s:10:\"categories\";s:8:\"digicore\";}s:11:\"\0*\0original\";a:4:{s:2:\"id\";i:21;s:4:\"name\";s:5:\"gloss\";s:5:\"price\";i:21;s:10:\"categories\";s:8:\"digicore\";}s:10:\"\0*\0changes\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:10:\"timestamps\";b:0;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:4:\"name\";i:1;s:5:\"price\";i:2;s:10:\"categories\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:14;O:15:\"App\\Models\\Beat\":31:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:5:\"beats\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:4:{s:2:\"id\";i:22;s:4:\"name\";s:5:\"happy\";s:5:\"price\";i:21;s:10:\"categories\";s:8:\"2010 pop\";}s:11:\"\0*\0original\";a:4:{s:2:\"id\";i:22;s:4:\"name\";s:5:\"happy\";s:5:\"price\";i:21;s:10:\"categories\";s:8:\"2010 pop\";}s:10:\"\0*\0changes\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:10:\"timestamps\";b:0;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:4:\"name\";i:1;s:5:\"price\";i:2;s:10:\"categories\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:15;O:15:\"App\\Models\\Beat\":31:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:5:\"beats\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:4:{s:2:\"id\";i:23;s:4:\"name\";s:6:\"hollow\";s:5:\"price\";i:18;s:10:\"categories\";s:8:\"hyperpop\";}s:11:\"\0*\0original\";a:4:{s:2:\"id\";i:23;s:4:\"name\";s:6:\"hollow\";s:5:\"price\";i:18;s:10:\"categories\";s:8:\"hyperpop\";}s:10:\"\0*\0changes\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:10:\"timestamps\";b:0;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:4:\"name\";i:1;s:5:\"price\";i:2;s:10:\"categories\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:16;O:15:\"App\\Models\\Beat\":31:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:5:\"beats\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:4:{s:2:\"id\";i:24;s:4:\"name\";s:7:\"iceberg\";s:5:\"price\";i:20;s:10:\"categories\";s:8:\"digicore\";}s:11:\"\0*\0original\";a:4:{s:2:\"id\";i:24;s:4:\"name\";s:7:\"iceberg\";s:5:\"price\";i:20;s:10:\"categories\";s:8:\"digicore\";}s:10:\"\0*\0changes\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:10:\"timestamps\";b:0;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:4:\"name\";i:1;s:5:\"price\";i:2;s:10:\"categories\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:17;O:15:\"App\\Models\\Beat\":31:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:5:\"beats\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:4:{s:2:\"id\";i:25;s:4:\"name\";s:12:\"lusty devils\";s:5:\"price\";i:19;s:10:\"categories\";s:9:\"scenecore\";}s:11:\"\0*\0original\";a:4:{s:2:\"id\";i:25;s:4:\"name\";s:12:\"lusty devils\";s:5:\"price\";i:19;s:10:\"categories\";s:9:\"scenecore\";}s:10:\"\0*\0changes\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:10:\"timestamps\";b:0;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:4:\"name\";i:1;s:5:\"price\";i:2;s:10:\"categories\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}}s:28:\"\0*\0escapeWhenCastingToString\";b:0;}', 1748718311),
('laravel_cache_categories', 'O:29:\"Illuminate\\Support\\Collection\":2:{s:8:\"\0*\0items\";a:6:{i:0;s:8:\"digicore\";i:1;s:8:\"hyperpop\";i:2;s:9:\"scenecore\";i:3;s:3:\"EDM\";i:4;s:8:\"2010 pop\";i:5;s:13:\"hard hyperpop\";}s:28:\"\0*\0escapeWhenCastingToString\";b:0;}', 1748718143);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inventories`
--

CREATE TABLE `inventories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `beat_id` bigint(20) UNSIGNED NOT NULL,
  `purchase_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `inventories`
--

INSERT INTO `inventories` (`id`, `user_id`, `beat_id`, `purchase_date`) VALUES
(4, 8, 13, '2025-06-05 03:40:49'),
(5, 8, 13, '2025-06-05 03:40:49'),
(6, 8, 23, '2025-06-05 03:43:22'),
(8, 8, 8, '2025-06-05 04:11:19'),
(9, 8, 16, '2025-06-05 04:41:14'),
(14, 8, 12, '2025-06-05 04:50:42'),
(15, 8, 11, '2025-06-05 04:57:16'),
(16, 8, 8, '2025-06-05 05:08:11'),
(17, 12, 19, '2025-06-05 17:02:25'),
(18, 12, 23, '2025-06-05 17:03:07');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_05_19_094236_create_personal_access_tokens_table', 1),
(5, '2025_05_19_095320_create_beats_table', 2),
(6, '2025_05_19_095405_create_baskets_table', 3),
(7, '2025_05_19_095435_create_inventories_table', 3),
(8, '2025_06_04_235930_add_stripe_price_id_to_beats_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(15, 'App\\Models\\User', 9, 'test', '89d014148ee973bce9806ba489ecc3afe396f00b2bad39105e010addb5d7c700', '[\"*\"]', NULL, NULL, '2025-05-27 13:06:18', '2025-05-27 13:06:18'),
(20, 'App\\Models\\User', 8, 'name5', '96c276491134c5bf8d7410424af7523b56f1d2466005279048f3208b284290e5', '[\"*\"]', '2025-06-05 02:01:29', NULL, '2025-06-04 11:11:31', '2025-06-05 02:01:29'),
(23, 'App\\Models\\User', 8, 'gerzer', 'b6a371e9c7a1d9163dd9d31fe48cb96502857fecb6bf5d9b45a30510f8d3f101', '[\"*\"]', '2025-06-05 03:08:11', NULL, '2025-06-04 20:56:34', '2025-06-05 03:08:11'),
(24, 'App\\Models\\User', 8, 'gerzer', '1f90d68720f772fb5e5f523a0d63507046f2450fc11e758b1297b56054f1bb1d', '[\"*\"]', '2025-06-05 14:24:10', NULL, '2025-06-05 02:01:49', '2025-06-05 14:24:10'),
(25, 'App\\Models\\User', 8, 'gerzer', '8f28c51be50c70c5e61933dedba43404e78ac184372c017dd96d090535c76bb8', '[\"*\"]', '2025-06-05 14:29:43', NULL, '2025-06-05 14:29:09', '2025-06-05 14:29:43'),
(27, 'App\\Models\\User', 12, 'Staufenberg', '114cd53746623b7febab73d88db669cf4a6069c8703b0595751f3999566d9e7c', '[\"*\"]', '2025-06-05 15:19:04', NULL, '2025-06-05 15:01:05', '2025-06-05 15:19:04'),
(29, 'App\\Models\\User', 13, 'name12', '6a917c0dd7eb37573ed3af01b8ea08ae9e3efffdf17f14956bfcee2360df3415', '[\"*\"]', '2025-06-05 15:17:48', NULL, '2025-06-05 15:15:40', '2025-06-05 15:17:48');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('E931r3ra3JGyPwAihLRA2DQiS9LepM8Rb5vq6mIS', NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQUdwNnVGbk1WVXZYTlJEdzRsS1NOeHRwRU1nU2RYdWI5WThlT0hQbSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1747659844);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(6, 'name1', 'drob20@gmail.com', NULL, '$2y$12$3fXXB2rdHtRDL.O1icTs4.xeu0WjX/lD0Sa3NzbaOsDNa0.v0pKMi', NULL, NULL, NULL),
(7, 'name2', 'drob2@gmail.com', NULL, '$2y$12$lsmhQ2pQYKo4VZzj9ovn5ecLlcgzqjTB8BfzH79K7ZkL0wNxhSvWa', NULL, NULL, NULL),
(8, 'gerzer', 'drob5@gmail.com', NULL, '$2y$12$jHF/kpsYlvrgRjFy./5PpON0rReR0IWQKqQHUfVsF2kn8U528ub/u', NULL, NULL, NULL),
(9, 'test', 'test20@gmail.com', NULL, '$2y$12$spB2hXTeJQ5jeub8XmxQcOo2WXTQcXLsO9H66gdqBgpz/MgLmFMYO', NULL, NULL, NULL),
(10, 'bismark', 'bismark25@gmail.com', NULL, '$2y$12$gCKgEwdgpt4GJVqTvreW.O8KE55l8vWTsgJ4ginCW8x01Q4hFT6Ie', NULL, NULL, NULL),
(11, 'monarchy', 'csar@gmail.com', NULL, '$2y$12$BTmzvLzYyu73R9OGuoIReuQC5UEt3CXpYAvWlUcVgFvLv8SHhMZMm', NULL, NULL, NULL),
(12, 'Staufenberg', 'one@gmail.com', NULL, '$2y$12$iZw0X4yJbw6iJJ5ewa3RB.6WGuM//DOYTLfMjmNnrIPpuXzZcBn8u', NULL, NULL, NULL),
(13, 'lucifer', 'drob12@gmail.com', NULL, '$2y$12$.2OlMF3aW4FtOMfqi/7av.11cDgbUD9w60mSg89gQUyUxKQr/ffGG', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `baskets`
--
ALTER TABLE `baskets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `baskets_user_id_foreign` (`user_id`),
  ADD KEY `baskets_beat_id_foreign` (`beat_id`);

--
-- Indexes for table `beats`
--
ALTER TABLE `beats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `inventories`
--
ALTER TABLE `inventories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `inventories_user_id_foreign` (`user_id`),
  ADD KEY `inventories_beat_id_foreign` (`beat_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `baskets`
--
ALTER TABLE `baskets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `beats`
--
ALTER TABLE `beats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inventories`
--
ALTER TABLE `inventories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `baskets`
--
ALTER TABLE `baskets`
  ADD CONSTRAINT `baskets_beat_id_foreign` FOREIGN KEY (`beat_id`) REFERENCES `beats` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `baskets_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `inventories`
--
ALTER TABLE `inventories`
  ADD CONSTRAINT `inventories_beat_id_foreign` FOREIGN KEY (`beat_id`) REFERENCES `beats` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `inventories_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
