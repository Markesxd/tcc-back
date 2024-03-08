<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240307212630 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE refeicao ADD plano_alimentar_id INT NOT NULL');
        $this->addSql('ALTER TABLE refeicao ADD CONSTRAINT FK_70F2D563C2EB6DE8 FOREIGN KEY (plano_alimentar_id) REFERENCES plano_alimentar (id)');
        $this->addSql('CREATE INDEX IDX_70F2D563C2EB6DE8 ON refeicao (plano_alimentar_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE refeicao DROP FOREIGN KEY FK_70F2D563C2EB6DE8');
        $this->addSql('DROP INDEX IDX_70F2D563C2EB6DE8 ON refeicao');
        $this->addSql('ALTER TABLE refeicao DROP plano_alimentar_id');
    }
}
