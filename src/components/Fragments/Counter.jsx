import React from "react";

// Buat komponen Counter yang menghitung berapa
// kali tombol "Click me" diklik
class Counter extends React.Component {
  // Inisialisasi state dengan nilai awal 0
  constructor(props) {
    super(props);

    console.log("Komponen telah diinisialisasi");

    this.state = {
      count: 0,
    };
  }

  //   Fungsi ini akan dipanggil saat komponen telah
  //   selesai diinisialisasi
  componentDidMount() {
    console.log("Komponen telah selesai diinisialisasi");
    // Mengupdate state dengan nilai 0
    this.setState({ count: 0 });
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count === 10) {
      console.log("ini sudah mencapai kondisi saat nya mengupdate state");

      this.setState({ count: 0 });
    }
  }

  // Fungsi render untuk menampilkan komponen
  render() {
    return (
      <div>
        {/* Tampilkan teks yang berisi jumlah klik */}
        <p>Anda mengklik {this.state.count} kali</p>
        {/* Buat tombol "Click me" yang jika diklik akan
        mengupdate state dengan nilai yang lebih besar 1 */}
        <button
          className="p-2 bg-black text-white rounded-md"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Klik saya
        </button>
      </div>
    );
  }
}

export default Counter;
