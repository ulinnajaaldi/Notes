import ReactCountryFlag from "react-country-flag";

const registerPage = {
  id: {
    heroTitle: "Atur berbagai tugasmu disini!",
    heroText: "Praktis, cepat dan gratis!",
    labelName: "Nama",
    namePlaceholder: "Masukan nama anda",
    emailPlaceholder: "Masukan email anda",
    passwordPlaceholder: "Masukan password anda",
    confirmPassword: "Konfirmasi Password",
    passwordConfPlaceholder: "Masukan konfirmasi password anda",
    registerBtn: "Daftar",
    accountAsk: "Sudah memiliki akun? ",
    loginAsk: "Masuk disini",
    passwordAlert: "Password tidak sama",
  },
  en: {
    heroTitle: "Organize your various tasks!",
    heroText: "Practical, fast and free!",
    labelName: "Name",
    namePlaceholder: "Enter your name",
    emailPlaceholder: "Enter your email",
    passwordPlaceholder: "Enter your password",
    confirmPassword: "Confirm Password",
    passwordConfPlaceholder: "Enter your password confirmation",
    registerBtn: "Register",
    accountAsk: "Already have an account? ",
    loginAsk: "Login here",
    passwordAlert: "Password do not match",
  },
};

const loginPage = {
  id: {
    heroTitle: "Atur berbagai tugasmu disini!",
    heroText: "Praktis, cepat dan gratis!",
    emailPlaceholder: "Masukan email anda",
    passwordPlaceholder: "Masukan password anda",
    loginBtn: "Masuk",
    accountAsk: "Belum memiliki akun? ",
    registerAsk: "Daftar disini",
  },
  en: {
    heroTitle: "Organize your various tasks!",
    heroText: "Practical, fast and free!",
    emailPlaceholder: "Enter your email",
    passwordPlaceholder: "Enter your password",
    loginBtn: "Login",
    accountAsk: "Don't have an account yet? ",
    registerAsk: "Register here",
  },
};

const navFront = {
  id: {
    flag: (
      <ReactCountryFlag
        countryCode="ID"
        svg
        style={{
          width: "1.7em",
          height: "1.7em",
        }}
        className="rounded-lg hover:zoom"
        title="Ganti Bahasa"
      />
    ),
    archive: "Arsip",
    home: "Beranda",
  },
  en: {
    flag: (
      <ReactCountryFlag
        countryCode="GB"
        svg
        style={{
          width: "1.7em",
          height: "1.7em",
        }}
        className="rounded-lg"
        title="Change Language"
      />
    ),
    archive: "Archive",
    home: "Home",
  },
};

const noteSearch = {
  id: {
    placeholder: "Cari catatanmu disini...",
  },
  en: {
    placeholder: "Search your notes here...",
  },
};

const noteCard = {
  id: {
    arch: "Arsip",
    unarch: "Batalkan Arsip",
  },
  en: {
    arch: "Archive",
    unarch: "Cancel Arsip",
  },
};

const noteDelete = {
  id: {
    delete: "Hapus",
  },
  en: {
    delete: "Delete",
  },
};

const noteEmpty = {
  id: {
    none: "Tidak ada catatan di sini...",
    p: "Tambahkan catatan dan dapatkan mengatur diri",
    ptwo: "Anda dengan cara terbaik!",
  },
  en: {
    none: "No notes here...",
    p: "Add notes and get organized",
    ptwo: "in the best possible way!",
  },
};

const pageEmpty = {
  id: {
    opps: "Opps, kami tidak dapat menemukan halaman ini.",
    massage:
      "Tapi jangan khawatir, Anda dapat menemukan banyak hal lain diberanda kami.",
  },
  en: {
    opps: "Opps, we couldn' find this page.",
    massage: "But don't worry, you can find many other things on our homepage.",
  },
};

const landingPage = {
  id: {
    header: "Daftar Catatan",
  },
  en: {
    header: "Notes List",
  },
};

const addNotePage = {
  id: {
    header: "Tambah Catatan Baru",
    inputTitlePlaceholder: "Judul...",
    inputTextPlaceholder: "Isi...",
  },
  en: {
    header: "Add New Note",
    inputTitlePlaceholder: "Title...",
    inputTextPlaceholder: "Contents...",
  },
};

const archivePage = {
  id: {
    header: "Daftar Catatan Arsip",
  },
  en: {
    header: "Archive Notes List",
  },
};

export const datas = {
  registerPage,
  loginPage,
  navFront,
  noteSearch,
  noteCard,
  noteDelete,
  noteEmpty,
  pageEmpty,
  landingPage,
  addNotePage,
  archivePage,
};
