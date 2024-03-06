<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240304181333 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE gato (id INT AUTO_INCREMENT NOT NULL, dono_id INT NOT NULL, nome VARCHAR(255) NOT NULL, aniversario DATE DEFAULT NULL, sexo SMALLINT NOT NULL, INDEX IDX_58FE718AC770385C (dono_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE gato ADD CONSTRAINT FK_58FE718AC770385C FOREIGN KEY (dono_id) REFERENCES `user` (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE gato DROP FOREIGN KEY FK_58FE718AC770385C');
        $this->addSql('DROP TABLE gato');
    }
}
