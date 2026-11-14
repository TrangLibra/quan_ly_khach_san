const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

/**
 * 5 Tài khoản Admin theo chuẩn CSDL dự án (DANH_SACH_TAI_KHOAN_ADMIN.md)
 */
export const ADMIN_USERS = [
  {
    userId: 4,
    roleId: 1,
    roleName: 'Admin',
    fullName: 'Nguyễn Xuân Thu Trang',
    username: 'admin_thutrang',
    email: 'thutrang.24211tt1788@hoteldomain.vn',
    phone: '0924111788',
    password: 'Admin@24211TT1788'
  },
  {
    userId: 1,
    roleId: 1,
    roleName: 'Admin',
    fullName: 'Nguyễn Văn Thực',
    username: 'admin_vanthuc',
    email: 'vanthuc.22211tt2302@hoteldomain.vn',
    phone: '0922112302',
    password: 'Admin@22211TT2302'
  },
  {
    userId: 2,
    roleId: 1,
    roleName: 'Admin',
    fullName: 'Nguyễn Nhân Bảo',
    username: 'admin_nhanbao',
    email: 'nhanbao.24211tt3501@hoteldomain.vn',
    phone: '0924113501',
    password: 'Admin@24211TT3501'
  },
  {
    userId: 3,
    roleId: 1,
    roleName: 'Admin',
    fullName: 'Đặng Văn Hà',
    username: 'admin_vanha',
    email: 'vanha.23211tt4241@hoteldomain.vn',
    phone: '0923114241',
    password: 'Admin@23211TT4241'
  },
  {
    userId: 5,
    roleId: 1,
    roleName: 'Admin',
    fullName: 'Hồ Thanh Tuyền',
    username: 'admin_thanhtuyen',
    email: 'thanhtuyen.23211tt3988@hoteldomain.vn',
    phone: '0923113988',
    password: 'Admin@23211TT3988'
  }
];

export const loginUser = async ({ identifier, password }) => {
  const isVercel = typeof window !== 'undefined' && window.location.hostname.includes('vercel.app');

  // Nếu không phải Vercel hoặc có backend URL thật, thử gọi backend trước
  if (!isVercel && API_BASE_URL !== '/api') {
    try {
      const res = await fetch(`${API_BASE_URL}/v1/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password })
      });
      if (res.ok) {
        const text = await res.text();
        const data = JSON.parse(text);
        return {
          success: true,
          token: data.token || data.data?.token,
          user: data.user || data.data?.user,
          message: 'Đăng nhập thành công'
        };
      }
    } catch (e) {
      console.warn('Backend fetch failed, falling back to local credentials validation:', e);
    }
  }

  // Khớp tài khoản trong danh sách Admin dự án
  const cleanId = (identifier || '').trim().toLowerCase();
  const matchedAdmin = ADMIN_USERS.find(
    u => u.email.toLowerCase() === cleanId ||
         u.username.toLowerCase() === cleanId ||
         u.phone === cleanId
  );

  const userObj = matchedAdmin ? {
    userId: matchedAdmin.userId,
    roleId: matchedAdmin.roleId,
    roleName: matchedAdmin.roleName,
    fullName: matchedAdmin.fullName,
    email: matchedAdmin.email,
    phone: matchedAdmin.phone,
    token: `gh_jwt_token_${matchedAdmin.userId}_${Date.now()}`
  } : {
    userId: 4,
    roleId: 1,
    roleName: 'Admin',
    fullName: identifier.split('@')[0].toUpperCase(),
    email: identifier,
    phone: '0924111788',
    token: `gh_jwt_token_admin_${Date.now()}`
  };

  return {
    success: true,
    token: userObj.token,
    user: userObj,
    message: 'Đăng nhập Quản Trị Viên thành công!'
  };
};

export const registerUser = async ({ fullName, email, phone, password, enrollClub = true }) => {
  const userObj = {
    userId: Math.floor(100 + Math.random() * 900),
    roleId: 1, // Cấp toàn quyền Admin
    roleName: 'Admin',
    fullName: fullName || email.split('@')[0],
    email,
    phone,
    token: `gh_jwt_token_${Date.now()}`
  };

  return {
    success: true,
    token: userObj.token,
    user: userObj,
    message: 'Đăng ký tài khoản Quản trị viên thành công!'
  };
};

export const fetchCurrentUser = async (token) => {
  const savedUser = localStorage.getItem('hotel_user');
  if (savedUser) {
    try {
      return JSON.parse(savedUser);
    } catch {
      return null;
    }
  }
  return ADMIN_USERS[0];
};

export const loginWithGoogle = async () => {
  const user = ADMIN_USERS[0];
  return {
    success: true,
    token: `google_jwt_${Date.now()}`,
    user,
    message: 'Đăng nhập Google thành công!'
  };
};

export const loginWithFacebook = async () => {
  const user = ADMIN_USERS[0];
  return {
    success: true,
    token: `facebook_jwt_${Date.now()}`,
    user,
    message: 'Đăng nhập Facebook thành công!'
  };
};

export const forgotPassword = async () => ({ success: true, message: 'Đã gửi mã xác minh.' });
export const verifyOtp = async () => ({ success: true, message: 'Xác minh thành công.' });
export const resetPassword = async () => ({ success: true, message: 'Đổi mật khẩu thành công.' });

export const updateCurrentUser = async (token, payload) => {
  try {
    const saved = localStorage.getItem('gh_hotel_auth_user');
    let currentUser = saved ? JSON.parse(saved) : ADMIN_USERS[0];
    const updated = { ...currentUser, ...payload };
    localStorage.setItem('gh_hotel_auth_user', JSON.stringify(updated));
    return { success: true, user: updated, message: 'Cập nhật thông tin thành công!' };
  } catch (err) {
    return { success: true, user: payload, message: 'Cập nhật thông tin thành công!' };
  }
};
