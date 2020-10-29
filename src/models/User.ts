import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public email: string;

  @Column()
  public passport: string;
}

export default User;
