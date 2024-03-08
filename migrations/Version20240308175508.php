<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240308175508 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE refeicao_log ADD data DATE NOT NULL, CHANGE refeicao_id refeicao_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE refeicao_log RENAME INDEX idx_70f2d563b232c240 TO IDX_160A2C0A832C1253');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE refeicao_log DROP data, CHANGE refeicao_id refeicao_id INT NOT NULL');
        $this->addSql('ALTER TABLE refeicao_log RENAME INDEX idx_160a2c0a832c1253 TO IDX_70F2D563B232C240');
    }
}
