/**
 * Cơ sở dữ liệu mặc định 5 sao chuẩn CSDL (Trích xuất 100% từ seedPristineClean.js)
 * Tự động nạp khi Backend chưa phản hồi hoặc đang khởi động trên cloud
 */

export const PRISTINE_BRANCHES = [
  { BranchId: 1, BranchName: 'Grand Horizon Phú Quốc Sanctuary Resort', Address: 'Bãi Khem, An Thới, TP. Phú Quốc, Kiên Giang', Phone: '0297 888 9999', Status: 'Active' },
  { BranchId: 2, BranchName: 'Grand Horizon Cam Ranh Bay Oasis', Address: 'Bãi Dài, Cam Ranh, Khánh Hòa', Phone: '0258 888 9999', Status: 'Active' },
  { BranchId: 3, BranchName: 'Grand Horizon Côn Đảo Oceanfront', Address: 'Bãi Nhát, Côn Đảo, Bà Rịa - Vũng Tàu', Phone: '0254 888 9999', Status: 'Active' },
  { BranchId: 4, BranchName: 'Grand Horizon Đà Nẵng Premier', Address: 'Đường Võ Nguyên Giáp, Mỹ Khê, Đà Nẵng', Phone: '0236 888 9999', Status: 'Active' },
  { BranchId: 5, BranchName: 'Grand Horizon Nha Trang Heritage', Address: 'Đường Trần Phú, TP. Nha Trang, Khánh Hòa', Phone: '0258 777 8888', Status: 'Active' }
];

export const PRISTINE_ROOM_TYPES = [
  {
    RoomTypeId: 1,
    TypeCode: 'RT-DLX-01',
    TypeName: 'Deluxe Ocean View',
    Description: 'Phòng Deluxe sang trọng với ban công riêng hướng biển Bãi Khem, nội thất gỗ óc chó ấm cúng.',
    BasePrice: 2500000.00,
    MaxOccupancy: 3,
    AdultCapacity: 2,
    ChildCapacity: 1,
    TurnoverMinutes: 30,
    ImageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    Status: 'Active',
    IsDeleted: 0
  },
  {
    RoomTypeId: 2,
    TypeCode: 'RT-SUI-02',
    TypeName: 'Premier Seafront Suite',
    Description: 'Căn hộ Suite thượng hạng phòng khách riêng biệt và ban công ngắm biển 180 độ tuyệt mỹ.',
    BasePrice: 4500000.00,
    MaxOccupancy: 4,
    AdultCapacity: 3,
    ChildCapacity: 1,
    TurnoverMinutes: 45,
    ImageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    Status: 'Active',
    IsDeleted: 0
  },
  {
    RoomTypeId: 3,
    TypeCode: 'RT-VIL-03',
    TypeName: 'Royal Beachfront Villa',
    Description: 'Biệt thự sát biển có hồ bơi riêng biệt lập, lối đi thẳng ra bờ cát trắng mịn màng.',
    BasePrice: 12000000.00,
    MaxOccupancy: 6,
    AdultCapacity: 4,
    ChildCapacity: 2,
    TurnoverMinutes: 90,
    ImageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    Status: 'Active',
    IsDeleted: 0
  },
  {
    RoomTypeId: 4,
    TypeCode: 'RT-BUN-04',
    TypeName: 'Garden Tropical Bungalow',
    Description: 'Bungalow nép mình giữa khu vườn nhiệt đới thanh bình, không gian hòa quyện thiên nhiên.',
    BasePrice: 3200000.00,
    MaxOccupancy: 3,
    AdultCapacity: 2,
    ChildCapacity: 1,
    TurnoverMinutes: 35,
    ImageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80',
    Status: 'Active',
    IsDeleted: 0
  },
  {
    RoomTypeId: 5,
    TypeCode: 'RT-FAM-05',
    TypeName: 'Grand Family Ocean Suite',
    Description: 'Không gian lý tưởng cho đại gia đình với 2 phòng ngủ lớn và khu vui chơi an toàn cho trẻ.',
    BasePrice: 5500000.00,
    MaxOccupancy: 6,
    AdultCapacity: 4,
    ChildCapacity: 2,
    TurnoverMinutes: 60,
    ImageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
    Status: 'Active',
    IsDeleted: 0
  },
  {
    RoomTypeId: 6,
    TypeCode: 'RT-PNT-06',
    TypeName: 'Presidential Horizon Penthouse',
    Description: 'Dinh thự áp mái siêu sang với quản gia riêng, rạp chiếu phim mini và hồ bơi vô cực trên cao.',
    BasePrice: 25000000.00,
    MaxOccupancy: 8,
    AdultCapacity: 6,
    ChildCapacity: 2,
    TurnoverMinutes: 120,
    ImageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    Status: 'Active',
    IsDeleted: 0
  },
  {
    RoomTypeId: 7,
    TypeCode: 'RT-SPA-07',
    TypeName: 'Lotus Spa Suite',
    Description: 'Hạng phòng nghỉ dưỡng kết hợp không gian trị liệu thư giãn chuyên biệt.',
    BasePrice: 6200000.00,
    MaxOccupancy: 3,
    AdultCapacity: 2,
    ChildCapacity: 1,
    TurnoverMinutes: 50,
    ImageUrl: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?w=800&q=80',
    Status: 'Active',
    IsDeleted: 0
  },
  {
    RoomTypeId: 8,
    TypeCode: 'RT-HON-08',
    TypeName: 'Honeymoon Ocean Retreat',
    Description: 'Thiết kế lãng mạn dành riêng cho tuần trăng mật với bồn tắm đôi view hoàng hôn Bãi Khem.',
    BasePrice: 5800000.00,
    MaxOccupancy: 2,
    AdultCapacity: 2,
    ChildCapacity: 0,
    TurnoverMinutes: 45,
    ImageUrl: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80',
    Status: 'Active',
    IsDeleted: 0
  }
];

export const PRISTINE_ROOMS = [
  // Tầng 1
  { RoomId: 1, room_number: '101', BranchId: 1, RoomTypeId: 1, floor: 1, status: 'Occupied', description: 'Phòng 101 Tầng 1 view vườn & hồ bơi', is_deleted: false, RoomType: { TypeName: 'Deluxe Ocean View', BasePrice: 2500000 } },
  { RoomId: 2, room_number: '102', BranchId: 1, RoomTypeId: 1, floor: 1, status: 'Occupied', description: 'Phòng 102 Tầng 1 view hướng biển', is_deleted: false, RoomType: { TypeName: 'Deluxe Ocean View', BasePrice: 2500000 } },
  { RoomId: 3, room_number: '103', BranchId: 1, RoomTypeId: 4, floor: 1, status: 'CleanAvailable', description: 'Bungalow 103 khuôn viên nhiệt đới', is_deleted: false, RoomType: { TypeName: 'Garden Tropical Bungalow', BasePrice: 3200000 } },
  { RoomId: 4, room_number: '104', BranchId: 1, RoomTypeId: 4, floor: 1, status: 'CleanAvailable', description: 'Bungalow 104 khuôn viên nhiệt đới', is_deleted: false, RoomType: { TypeName: 'Garden Tropical Bungalow', BasePrice: 3200000 } },
  { RoomId: 5, room_number: '105', BranchId: 1, RoomTypeId: 1, floor: 1, status: 'Dirty', description: 'Phòng 105 Tầng 1 chờ dọn phòng', is_deleted: false, RoomType: { TypeName: 'Deluxe Ocean View', BasePrice: 2500000 } },
  { RoomId: 29, room_number: '106', BranchId: 1, RoomTypeId: 4, floor: 1, status: 'CleanAvailable', description: 'Bungalow 106 khuôn viên nhiệt đới', is_deleted: false, RoomType: { TypeName: 'Garden Tropical Bungalow', BasePrice: 3200000 } },

  // Tầng 2
  { RoomId: 6, room_number: '201', BranchId: 1, RoomTypeId: 1, floor: 2, status: 'Occupied', description: 'Phòng 201 Tầng 2 ban công ngắm biển', is_deleted: false, RoomType: { TypeName: 'Deluxe Ocean View', BasePrice: 2500000 } },
  { RoomId: 7, room_number: '202', BranchId: 1, RoomTypeId: 2, floor: 2, status: 'Occupied', description: 'Premier Suite 202 view trực diện biển', is_deleted: false, RoomType: { TypeName: 'Premier Seafront Suite', BasePrice: 4500000 } },
  { RoomId: 8, room_number: '203', BranchId: 1, RoomTypeId: 2, floor: 2, status: 'CleanAvailable', description: 'Premier Suite 203 cao cấp', is_deleted: false, RoomType: { TypeName: 'Premier Seafront Suite', BasePrice: 4500000 } },
  { RoomId: 9, room_number: '204', BranchId: 1, RoomTypeId: 1, floor: 2, status: 'CleanAvailable', description: 'Phòng 204 Tầng 2 view biển êm đềm', is_deleted: false, RoomType: { TypeName: 'Deluxe Ocean View', BasePrice: 2500000 } },
  { RoomId: 10, room_number: '205', BranchId: 1, RoomTypeId: 1, floor: 2, status: 'Cleaning', description: 'Phòng 205 đang được nhân viên làm sạch', is_deleted: false, RoomType: { TypeName: 'Deluxe Ocean View', BasePrice: 2500000 } },

  // Tầng 3
  { RoomId: 11, room_number: '301', BranchId: 1, RoomTypeId: 2, floor: 3, status: 'Occupied', description: 'Premier Suite 301 ban công hoàng hôn', is_deleted: false, RoomType: { TypeName: 'Premier Seafront Suite', BasePrice: 4500000 } },
  { RoomId: 12, room_number: '302', BranchId: 1, RoomTypeId: 7, floor: 3, status: 'Occupied', description: 'Lotus Spa Suite 302 không gian thư giãn', is_deleted: false, RoomType: { TypeName: 'Lotus Spa Suite', BasePrice: 6200000 } },
  { RoomId: 13, room_number: '303', BranchId: 1, RoomTypeId: 5, floor: 3, status: 'CleanAvailable', description: 'Grand Family Suite 303 tiện nghi', is_deleted: false, RoomType: { TypeName: 'Grand Family Ocean Suite', BasePrice: 5500000 } },
  { RoomId: 14, room_number: '304', BranchId: 1, RoomTypeId: 5, floor: 3, status: 'CleanAvailable', description: 'Grand Family Suite 304 tiện nghi', is_deleted: false, RoomType: { TypeName: 'Grand Family Ocean Suite', BasePrice: 5500000 } },
  { RoomId: 15, room_number: '305', BranchId: 1, RoomTypeId: 2, floor: 3, status: 'Maintenance', description: 'Premier Suite 305 bảo trì điều hòa', is_deleted: false, RoomType: { TypeName: 'Premier Seafront Suite', BasePrice: 4500000 } },

  // Tầng 4
  { RoomId: 16, room_number: '401', BranchId: 1, RoomTypeId: 1, floor: 4, status: 'CleanAvailable', description: 'Deluxe Ocean View 401 tầng cao', is_deleted: false, RoomType: { TypeName: 'Deluxe Ocean View', BasePrice: 2500000 } },
  { RoomId: 17, room_number: '402', BranchId: 1, RoomTypeId: 7, floor: 4, status: 'CleanAvailable', description: 'Lotus Spa Suite 402 thư thái', is_deleted: false, RoomType: { TypeName: 'Lotus Spa Suite', BasePrice: 6200000 } },
  { RoomId: 18, room_number: '403', BranchId: 1, RoomTypeId: 5, floor: 4, status: 'CleanAvailable', description: 'Grand Family Suite 403 rộng rãi', is_deleted: false, RoomType: { TypeName: 'Grand Family Ocean Suite', BasePrice: 5500000 } },
  { RoomId: 19, room_number: '404', BranchId: 1, RoomTypeId: 2, floor: 4, status: 'CleanAvailable', description: 'Premier Suite 404 tầng cao view biển', is_deleted: false, RoomType: { TypeName: 'Premier Seafront Suite', BasePrice: 4500000 } },
  { RoomId: 20, room_number: '405', BranchId: 1, RoomTypeId: 1, floor: 4, status: 'CleanAvailable', description: 'Phòng Deluxe 405 view bao quát biển', is_deleted: false, RoomType: { TypeName: 'Deluxe Ocean View', BasePrice: 2500000 } },
  { RoomId: 31, room_number: '406', BranchId: 1, RoomTypeId: 8, floor: 4, status: 'CleanAvailable', description: 'Honeymoon Retreat 406 lãng mạn', is_deleted: false, RoomType: { TypeName: 'Honeymoon Ocean Retreat', BasePrice: 5800000 } },

  // Tầng 5
  { RoomId: 21, room_number: '501', BranchId: 1, RoomTypeId: 3, floor: 5, status: 'Occupied', description: 'Royal Beachfront Villa 501 hồ bơi riêng', is_deleted: false, RoomType: { TypeName: 'Royal Beachfront Villa', BasePrice: 12000000 } },
  { RoomId: 22, room_number: '502', BranchId: 1, RoomTypeId: 3, floor: 5, status: 'CleanAvailable', description: 'Royal Beachfront Villa 502 hồ bơi riêng', is_deleted: false, RoomType: { TypeName: 'Royal Beachfront Villa', BasePrice: 12000000 } },
  { RoomId: 23, room_number: '503', BranchId: 1, RoomTypeId: 6, floor: 5, status: 'CleanAvailable', description: 'Presidential Penthouse 503 đẳng cấp đỉnh cao', is_deleted: false, RoomType: { TypeName: 'Presidential Horizon Penthouse', BasePrice: 25000000 } },
  { RoomId: 24, room_number: '504', BranchId: 1, RoomTypeId: 6, floor: 5, status: 'CleanAvailable', description: 'Presidential Penthouse 504 đẳng cấp đỉnh cao', is_deleted: false, RoomType: { TypeName: 'Presidential Horizon Penthouse', BasePrice: 25000000 } },
  { RoomId: 25, room_number: '505', BranchId: 1, RoomTypeId: 3, floor: 5, status: 'CleanAvailable', description: 'Royal Beachfront Villa 505 góc biển', is_deleted: false, RoomType: { TypeName: 'Royal Beachfront Villa', BasePrice: 12000000 } }
];

export const PRISTINE_BOOKINGS = [
  {
    BookingId: 1,
    BookingCode: 'BK-0801',
    CustomerName: 'Nguyễn Hoàng Nam',
    CustomerPhone: '0909999888',
    CustomerEmail: 'hoangnam.phuquoc@gmail.com',
    RoomTypeId: 1,
    RoomTypeName: 'Deluxe Ocean View',
    RoomNumber: '101',
    CheckInDate: '2026-11-13',
    CheckOutDate: '2026-11-16',
    NumberOfNights: 3,
    Adults: 2,
    Children: 1,
    TotalAmount: 7500000,
    DepositAmount: 3750000,
    Status: 'CheckedIn'
  },
  {
    BookingId: 2,
    BookingCode: 'BK-0802',
    CustomerName: 'Trần Thu Hà',
    CustomerPhone: '0912345601',
    CustomerEmail: 'thuha.hanoi@gmail.com',
    RoomTypeId: 1,
    RoomTypeName: 'Deluxe Ocean View',
    RoomNumber: '102',
    CheckInDate: '2026-11-14',
    CheckOutDate: '2026-11-16',
    NumberOfNights: 2,
    Adults: 2,
    Children: 0,
    TotalAmount: 5000000,
    DepositAmount: 5000000,
    Status: 'CheckedIn'
  },
  {
    BookingId: 3,
    BookingCode: 'BK-0803',
    CustomerName: 'Lê Quang Minh',
    CustomerPhone: '0912345602',
    CustomerEmail: 'quangminh.saigon@gmail.com',
    RoomTypeId: 1,
    RoomTypeName: 'Deluxe Ocean View',
    RoomNumber: '201',
    CheckInDate: '2026-11-12',
    CheckOutDate: '2026-11-16',
    NumberOfNights: 4,
    Adults: 2,
    Children: 0,
    TotalAmount: 10000000,
    DepositAmount: 5000000,
    Status: 'CheckedIn'
  },
  {
    BookingId: 4,
    BookingCode: 'BK-0804',
    CustomerName: 'Phạm Kim Anh',
    CustomerPhone: '0912345603',
    CustomerEmail: 'kimanh.danang@gmail.com',
    RoomTypeId: 2,
    RoomTypeName: 'Premier Seafront Suite',
    RoomNumber: '202',
    CheckInDate: '2026-11-14',
    CheckOutDate: '2026-11-17',
    NumberOfNights: 3,
    Adults: 3,
    Children: 1,
    TotalAmount: 13500000,
    DepositAmount: 6750000,
    Status: 'CheckedIn'
  },
  {
    BookingId: 5,
    BookingCode: 'BK-0805',
    CustomerName: 'Hoàng Gia Bảo',
    CustomerPhone: '0912345604',
    CustomerEmail: 'giabao.vip@gmail.com',
    RoomTypeId: 3,
    RoomTypeName: 'Royal Beachfront Villa',
    RoomNumber: '501',
    CheckInDate: '2026-11-13',
    CheckOutDate: '2026-11-18',
    NumberOfNights: 5,
    Adults: 4,
    Children: 2,
    TotalAmount: 60000000,
    DepositAmount: 30000000,
    Status: 'CheckedIn'
  },
  {
    BookingId: 6,
    BookingCode: 'BK-0806',
    CustomerName: 'Đặng Tuấn Kiệt',
    CustomerPhone: '0912345605',
    CustomerEmail: 'tuankiet.invest@gmail.com',
    RoomTypeId: 2,
    RoomTypeName: 'Premier Seafront Suite',
    RoomNumber: '301',
    CheckInDate: '2026-11-14',
    CheckOutDate: '2026-11-16',
    NumberOfNights: 2,
    Adults: 2,
    Children: 0,
    TotalAmount: 9000000,
    DepositAmount: 4500000,
    Status: 'Confirmed'
  }
];

export const PRISTINE_SERVICES = [
  { ServiceId: 1, CategoryId: 1, ServiceCode: 'SVC-SPA-001', ServiceName: 'Trị liệu thảo mộc toàn thân Aroma 60m', Price: 1650000.00, Unit: 'Liệu trình', CategoryName: 'Spa & Chăm Sóc Sức Khỏe', Status: 'Active' },
  { ServiceId: 2, CategoryId: 1, ServiceCode: 'SVC-SPA-002', ServiceName: 'Massage đá nóng núi lửa Himalaya 90m', Price: 2100000.00, Unit: 'Liệu trình', CategoryName: 'Spa & Chăm Sóc Sức Khỏe', Status: 'Active' },
  { ServiceId: 3, CategoryId: 1, ServiceCode: 'SVC-SPA-003', ServiceName: 'Xông hơi thảo dược & Tẩy tế bào chết ngọc trai', Price: 850000.00, Unit: 'Lượt', CategoryName: 'Spa & Chăm Sóc Sức Khỏe', Status: 'Active' },
  { ServiceId: 4, CategoryId: 2, ServiceCode: 'SVC-DNG-001', ServiceName: 'Suất ăn sáng In-room Dining chuẩn American', Price: 450000.00, Unit: 'Khách', CategoryName: 'Ẩm Thực Phục Vụ Tại Phòng', Status: 'Active' },
  { ServiceId: 5, CategoryId: 2, ServiceCode: 'SVC-DNG-002', ServiceName: 'Bữa tối lãng mạn ánh nến bên bờ biển', Price: 4800000.00, Unit: 'Cặp đôi', CategoryName: 'Ẩm Thực Phục Vụ Tại Phòng', Status: 'Active' },
  { ServiceId: 6, CategoryId: 3, ServiceCode: 'SVC-LDY-001', ServiceName: 'Giặt hấp âu phục cao cấp & Tiệt trùng', Price: 350000.00, Unit: 'Bộ', CategoryName: 'Giặt Ủi & Hấp Cao Cấp', Status: 'Active' },
  { ServiceId: 7, CategoryId: 4, ServiceCode: 'SVC-TRN-001', ServiceName: 'Đón tiễn sân bay Phú Quốc xe Mercedes Maybach', Price: 1200000.00, Unit: 'Lượt', CategoryName: 'Vận Chuyển Concierge', Status: 'Active' }
];


export const PRISTINE_PHYSICAL_ROOMS = [
  // Tầng 1
  { id: 1, so_phong: '101', tang: 1, khu: 'A', ma_loai: 'RT-1', ma_khoa: 'LOCK-101', buong_phong: 'clean', luu_tru: 'inhouse', loai_phong_ten: 'Deluxe Ocean View', gia_ngay: 2500000, ghi_chu: 'Phòng 101 view vườn & hồ bơi' },
  { id: 2, so_phong: '102', tang: 1, khu: 'A', ma_loai: 'RT-1', ma_khoa: 'LOCK-102', buong_phong: 'clean', luu_tru: 'inhouse', loai_phong_ten: 'Deluxe Ocean View', gia_ngay: 2500000, ghi_chu: 'Phòng 102 view hướng biển' },
  { id: 3, so_phong: '103', tang: 1, khu: 'A', ma_loai: 'RT-4', ma_khoa: 'LOCK-103', buong_phong: 'clean', luu_tru: 'vacant', loai_phong_ten: 'Garden Tropical Bungalow', gia_ngay: 3200000, ghi_chu: 'Bungalow 103 khuôn viên nhiệt đới' },
  { id: 4, so_phong: '104', tang: 1, khu: 'A', ma_loai: 'RT-4', ma_khoa: 'LOCK-104', buong_phong: 'clean', luu_tru: 'vacant', loai_phong_ten: 'Garden Tropical Bungalow', gia_ngay: 3200000, ghi_chu: 'Bungalow 104 khuôn viên nhiệt đới' },
  { id: 5, so_phong: '105', tang: 1, khu: 'A', ma_loai: 'RT-1', ma_khoa: 'LOCK-105', buong_phong: 'dirty', luu_tru: 'vacant', loai_phong_ten: 'Deluxe Ocean View', gia_ngay: 2500000, ghi_chu: 'Phòng 105 Tầng 1 chờ dọn phòng' },
  { id: 29, so_phong: '106', tang: 1, khu: 'A', ma_loai: 'RT-4', ma_khoa: 'LOCK-106', buong_phong: 'clean', luu_tru: 'vacant', loai_phong_ten: 'Garden Tropical Bungalow', gia_ngay: 3200000, ghi_chu: 'Bungalow 106 khuôn viên nhiệt đới' },

  // Tầng 2
  { id: 6, so_phong: '201', tang: 2, khu: 'A', ma_loai: 'RT-1', ma_khoa: 'LOCK-201', buong_phong: 'clean', luu_tru: 'inhouse', loai_phong_ten: 'Deluxe Ocean View', gia_ngay: 2500000, ghi_chu: 'Phòng 201 Tầng 2 ban công ngắm biển' },
  { id: 7, so_phong: '202', tang: 2, khu: 'A', ma_loai: 'RT-2', ma_khoa: 'LOCK-202', buong_phong: 'clean', luu_tru: 'inhouse', loai_phong_ten: 'Premier Seafront Suite', gia_ngay: 4500000, ghi_chu: 'Premier Suite 202 view trực diện biển' },
  { id: 8, so_phong: '203', tang: 2, khu: 'A', ma_loai: 'RT-2', ma_khoa: 'LOCK-203', buong_phong: 'clean', luu_tru: 'vacant', loai_phong_ten: 'Premier Seafront Suite', gia_ngay: 4500000, ghi_chu: 'Premier Suite 203 cao cấp' },
  { id: 9, so_phong: '204', tang: 2, khu: 'A', ma_loai: 'RT-1', ma_khoa: 'LOCK-204', buong_phong: 'clean', luu_tru: 'vacant', loai_phong_ten: 'Deluxe Ocean View', gia_ngay: 2500000, ghi_chu: 'Phòng 204 Tầng 2 view biển êm đềm' },
  { id: 10, so_phong: '205', tang: 2, khu: 'A', ma_loai: 'RT-1', ma_khoa: 'LOCK-205', buong_phong: 'dirty', luu_tru: 'vacant', loai_phong_ten: 'Deluxe Ocean View', gia_ngay: 2500000, ghi_chu: 'Phòng 205 đang làm sạch' },

  // Tầng 3
  { id: 11, so_phong: '301', tang: 3, khu: 'B', ma_loai: 'RT-2', ma_khoa: 'LOCK-301', buong_phong: 'clean', luu_tru: 'inhouse', loai_phong_ten: 'Premier Seafront Suite', gia_ngay: 4500000, ghi_chu: 'Premier Suite 301 ban công hoàng hôn' },
  { id: 12, so_phong: '302', tang: 3, khu: 'B', ma_loai: 'RT-7', ma_khoa: 'LOCK-302', buong_phong: 'clean', luu_tru: 'inhouse', loai_phong_ten: 'Lotus Spa Suite', gia_ngay: 6200000, ghi_chu: 'Lotus Spa Suite 302 không gian thư giãn' },
  { id: 13, so_phong: '303', tang: 3, khu: 'B', ma_loai: 'RT-5', ma_khoa: 'LOCK-303', buong_phong: 'clean', luu_tru: 'vacant', loai_phong_ten: 'Grand Family Ocean Suite', gia_ngay: 5500000, ghi_chu: 'Grand Family Suite 303 tiện nghi' },
  { id: 14, so_phong: '304', tang: 3, khu: 'B', ma_loai: 'RT-5', ma_khoa: 'LOCK-304', buong_phong: 'clean', luu_tru: 'vacant', loai_phong_ten: 'Grand Family Ocean Suite', gia_ngay: 5500000, ghi_chu: 'Grand Family Suite 304 tiện nghi' },
  { id: 15, so_phong: '305', tang: 3, khu: 'B', ma_loai: 'RT-2', ma_khoa: 'LOCK-305', buong_phong: 'ooo', luu_tru: 'vacant', loai_phong_ten: 'Premier Seafront Suite', gia_ngay: 4500000, ghi_chu: 'Premier Suite 305 bảo trì điều hòa' },

  // Tầng 4
  { id: 16, so_phong: '401', tang: 4, khu: 'B', ma_loai: 'RT-1', ma_khoa: 'LOCK-401', buong_phong: 'clean', luu_tru: 'vacant', loai_phong_ten: 'Deluxe Ocean View', gia_ngay: 2500000, ghi_chu: 'Deluxe Ocean View 401 tầng cao' },
  { id: 17, so_phong: '402', tang: 4, khu: 'B', ma_loai: 'RT-7', ma_khoa: 'LOCK-402', buong_phong: 'clean', luu_tru: 'vacant', loai_phong_ten: 'Lotus Spa Suite', gia_ngay: 6200000, ghi_chu: 'Lotus Spa Suite 402 thư thái' },
  { id: 18, so_phong: '403', tang: 4, khu: 'B', ma_loai: 'RT-5', ma_khoa: 'LOCK-403', buong_phong: 'clean', luu_tru: 'vacant', loai_phong_ten: 'Grand Family Ocean Suite', gia_ngay: 5500000, ghi_chu: 'Grand Family Suite 403 rộng rãi' },
  { id: 19, so_phong: '404', tang: 4, khu: 'B', ma_loai: 'RT-2', ma_khoa: 'LOCK-404', buong_phong: 'clean', luu_tru: 'vacant', loai_phong_ten: 'Premier Seafront Suite', gia_ngay: 4500000, ghi_chu: 'Premier Suite 404 tầng cao view biển' },
  { id: 20, so_phong: '405', tang: 4, khu: 'B', ma_loai: 'RT-1', ma_khoa: 'LOCK-405', buong_phong: 'clean', luu_tru: 'vacant', loai_phong_ten: 'Deluxe Ocean View', gia_ngay: 2500000, ghi_chu: 'Phòng Deluxe 405 view bao quát biển' },
  { id: 31, so_phong: '406', tang: 4, khu: 'B', ma_loai: 'RT-8', ma_khoa: 'LOCK-406', buong_phong: 'clean', luu_tru: 'vacant', loai_phong_ten: 'Honeymoon Ocean Retreat', gia_ngay: 5800000, ghi_chu: 'Honeymoon Retreat 406 lãng mạn' },

  // Tầng 5
  { id: 21, so_phong: '501', tang: 5, khu: 'VIP', ma_loai: 'RT-3', ma_khoa: 'LOCK-501', buong_phong: 'clean', luu_tru: 'inhouse', loai_phong_ten: 'Royal Beachfront Villa', gia_ngay: 12000000, ghi_chu: 'Royal Beachfront Villa 501 hồ bơi riêng' },
  { id: 22, so_phong: '502', tang: 5, khu: 'VIP', ma_loai: 'RT-3', ma_khoa: 'LOCK-502', buong_phong: 'clean', luu_tru: 'vacant', loai_phong_ten: 'Royal Beachfront Villa', gia_ngay: 12000000, ghi_chu: 'Royal Beachfront Villa 502 hồ bơi riêng' },
  { id: 23, so_phong: '503', tang: 5, khu: 'VIP', ma_loai: 'RT-6', ma_khoa: 'LOCK-503', buong_phong: 'clean', luu_tru: 'vacant', loai_phong_ten: 'Presidential Horizon Penthouse', gia_ngay: 25000000, ghi_chu: 'Presidential Penthouse 503 đẳng cấp đỉnh cao' },
  { id: 24, so_phong: '504', tang: 5, khu: 'VIP', ma_loai: 'RT-6', ma_khoa: 'LOCK-504', buong_phong: 'clean', luu_tru: 'vacant', loai_phong_ten: 'Presidential Horizon Penthouse', gia_ngay: 25000000, ghi_chu: 'Presidential Penthouse 504 đẳng cấp đỉnh cao' },
  { id: 25, so_phong: '505', tang: 5, khu: 'VIP', ma_loai: 'RT-3', ma_khoa: 'LOCK-505', buong_phong: 'clean', luu_tru: 'vacant', loai_phong_ten: 'Royal Beachfront Villa', gia_ngay: 12000000, ghi_chu: 'Royal Beachfront Villa 505 góc biển' }
];
