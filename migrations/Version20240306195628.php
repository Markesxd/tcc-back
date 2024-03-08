<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240306195628 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE plano_alimentar (id INT AUTO_INCREMENT NOT NULL, usuario_id INT NOT NULL, nome VARCHAR(255) NOT NULL, INDEX IDX_93B4036FDB38439E (usuario_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE plano_alimentar ADD CONSTRAINT FK_93B4036FDB38439E FOREIGN KEY (usuario_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE gato ADD plano_alimentar_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE gato ADD CONSTRAINT FK_58FE718AC2EB6DE8 FOREIGN KEY (plano_alimentar_id) REFERENCES plano_alimentar (id)');
        $this->addSql('CREATE INDEX IDX_58FE718AC2EB6DE8 ON gato (plano_alimentar_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE gato DROP FOREIGN KEY FK_58FE718AC2EB6DE8');
        $this->addSql('ALTER TABLE plano_alimentar DROP FOREIGN KEY FK_93B4036FDB38439E');
        $this->addSql('DROP TABLE plano_alimentar');
        $this->addSql('DROP INDEX IDX_58FE718AC2EB6DE8 ON gato');
        $this->addSql('ALTER TABLE gato DROP plano_alimentar_id');
    }
}
