import React from "react";

class Tes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null, // Rak kosong
      loading: true, // Status loading
    };
  }

  componentDidMount() {
    // Ambil data dari API
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data, loading: false }); // Isi rak dengan data
      });
  }

  render() {
    const { data, loading } = this.state;
    if (loading) {
      return <div>Loading...</div>; // Tampilkan loading saat data belum ada
    }
    return <div>{JSON.stringify(data)}</div>; // Tampilkan data setelah diambil
  }
}

export default Tes;
