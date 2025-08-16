export default {
  header: {
    title: 'แบบฟอร์มขอใบกำกับภาษีอิเล็กทรอนิกส์',
    subtitle: 'ติดต่อฝ่ายบริการลูกค้า',
  },
  form: {
    orderChannel: { label: 'ช่องทางคำสั่งซื้อ', placeholder: 'เลือกช่องทาง' },
    orderRef: { label: 'เลขที่อ้างอิงคำสั่งซื้อ', placeholder: 'กรอกเลขอ้างอิง' },
    personType: {
      label: 'ประเภทบุคคล',
      options: { individual: 'บุคคลธรรมดา', juristic: 'นิติบุคคล' },
    },
    taxId: { label: 'เลขประจำตัวผู้เสียภาษี', placeholder: 'กรอกเลข 13 หลัก' },
    firstName: { label: 'ชื่อ', placeholder: 'กรอกชื่อ' },
    lastName: { label: 'นามสกุล', placeholder: 'กรอกนามสกุล' },
    addressLine: {
      label: 'บ้านเลขที่/อาคาร/หมู่บ้าน/ถนน/ซอย',
      placeholder: 'กรอกรายละเอียดที่อยู่',
    },
    province: { label: 'จังหวัด', placeholder: 'เลือกจังหวัด' },
    amphure: { label: 'อำเภอ', placeholder: 'เลือกอำเภอ' },
    tambon: { label: 'ตำบล', placeholder: 'เลือกตำบล' },
    postalCode: { label: 'รหัสไปรษณีย์', placeholder: '' },
    email: { label: 'อีเมลล์', placeholder: 'กรอกอีเมลล์' },
    submit: 'ส่งคำขอ',
  },
  orderChannel: { options: { POS: 'POS', LINE: 'Line OA', WEB: 'เว็บไซต์' } },
  validation: {
    required: 'กรุณากรอกข้อมูล',
    email: 'อีเมลล์ไม่ถูกต้อง',
    taxId: 'เลขผู้เสียภาษีไม่ถูกต้อง',
    min: 'ข้อมูลสั้นเกินไป',
    max: 'ข้อมูลยาวเกินไป',
  },
  toasts: {
    confirmSubmit: 'ยืนยันการส่งคำขอ?',
    success: 'ส่งคำขอสำเร็จ',
    error: 'เกิดข้อผิดพลาด กรุณาลองใหม่',
  },
  buttons: { confirm: 'ยืนยัน', cancel: 'ยกเลิก' },
};
