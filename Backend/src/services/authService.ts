import bcrypt from 'bcryptjs';

// Encriptar contraseñas
export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

// Comparar contraseñas
export const comparePasswords = async (password: string, hashedPassword: string) => {
  return bcrypt.compare(password, hashedPassword);
};
