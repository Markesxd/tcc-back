<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240306130803 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE evento (id INT AUTO_INCREMENT NOT NULL, usuario_id INT NOT NULL, nome VARCHAR(255) NOT NULL, data DATE NOT NULL, intervalo_de_repeticao SMALLINT NOT NULL, INDEX IDX_47860B05DB38439E (usuario_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE evento_gato (evento_id INT NOT NULL, gato_id INT NOT NULL, INDEX IDX_40BAB71087A5F842 (evento_id), INDEX IDX_40BAB710E6C2CC92 (gato_id), PRIMARY KEY(evento_id, gato_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE evento ADD CONSTRAINT FK_47860B05DB38439E FOREIGN KEY (usuario_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE evento_gato ADD CONSTRAINT FK_40BAB71087A5F842 FOREIGN KEY (evento_id) REFERENCES evento (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE evento_gato ADD CONSTRAINT FK_40BAB710E6C2CC92 FOREIGN KEY (gato_id) REFERENCES gato (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE evento DROP FOREIGN KEY FK_47860B05DB38439E');
        $this->addSql('ALTER TABLE evento_gato DROP FOREIGN KEY FK_40BAB71087A5F842');
        $this->addSql('ALTER TABLE evento_gato DROP FOREIGN KEY FK_40BAB710E6C2CC92');
        $this->addSql('DROP TABLE evento');
        $this->addSql('DROP TABLE evento_gato');
    }
}
