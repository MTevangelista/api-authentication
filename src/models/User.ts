import {
  BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn,
} from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @BeforeInsert()
  @BeforeUpdate()
  public hashPassword(): void {
    this.password = bcrypt.hashSync(this.password, 12);
  }
}

export default User;
