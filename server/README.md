<p align="center"><a href="https://github.com/Luca-Castelnuovo/Secure"><img src="https://rawcdn.githack.com/Luca-Castelnuovo/Deploy/09849e0612d3b4ea98589b0b49605483b4164170/public/assets/images/banner.png"></a></p>

<p align="center">
<a href="https://github.com/Luca-Castelnuovo/Secure/commits/master"><img src="https://img.shields.io/github/last-commit/Luca-Castelnuovo/Secure" alt="Latest Commit"></a>
<a href="https://github.com/Luca-Castelnuovo/Secure/issues"><img src="https://img.shields.io/github/issues/Luca-Castelnuovo/Secure" alt="Issues"></a>
<a href="../LICENSE.md"><img src="https://img.shields.io/github/license/Luca-Castelnuovo/Secure" alt="License"></a>
</p>

# Secure - Server

Securely upload and share files.

## Installation

For development

1. `git clone https://github.com/Luca-Castelnuovo/Secure.git`
2. `composer install`
3. Edit `.env`
4. `php cubequence app:key`
5. `php cubequence db:migrate`
6. `php cubequence db:seed`
7. Start development server `php -S localhost:8080 -t public`

For production

1. `git clone https://github.com/Luca-Castelnuovo/Secure.git`
2. `composer install --optimize-autoloader --no-dev`
3. Edit `.env`
4. `php cubequence app:key`
5. `php cubequence db:migrate`
