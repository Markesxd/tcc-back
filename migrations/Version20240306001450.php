<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240306001450 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE caixa_de_areia (id INT AUTO_INCREMENT NOT NULL, usuario_id INT NOT NULL, nome VARCHAR(255) NOT NULL, limpo_em DATE DEFAULT NULL, INDEX IDX_45B31D08DB38439E (usuario_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE caixa_de_areia ADD CONSTRAINT FK_45B31D08DB38439E FOREIGN KEY (usuario_id) REFERENCES `user` (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE caixa_de_areia DROP FOREIGN KEY FK_45B31D08DB38439E');
        $this->addSql('DROP TABLE caixa_de_areia');
    }
}
