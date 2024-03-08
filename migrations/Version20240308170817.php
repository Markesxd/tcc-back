<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240308170817 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE refeicao_log (id INT AUTO_INCREMENT NOT NULL, foi_servida TINYINT(1) NOT NULL, refeicao_id INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE refeicao_log ADD CONSTRAINT FK_70F2D563B232C240 FOREIGN KEY (refeicao_id) REFERENCES refeicao (id)');
        $this->addSql('CREATE INDEX IDX_70F2D563B232C240 ON refeicao_log (refeicao_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE refeicao_log DROP FOREIGN KEY FK_70F2D563B232C240');
        $this->addSql('DROP TABLE refeicao_log');
        $this->addSql('DROP INDEX IDX_70F2D563B232C240 ON refeicao_log');
    }
}
