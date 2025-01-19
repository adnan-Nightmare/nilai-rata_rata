export const result = (mtk, bindo, bing, ipas, sejarah, agama, infomatika) => {
    const hasil = Math.round((mtk+ bindo + bing + sejarah + agama + ipas + infomatika) / 7);
  return hasil;
};

export const peringkat = (nilai) => {
    const total = nilai.reduce((sum, nil) => sum + nil, 0)
    return total / nilai.length
}

export const lulus = (rata) => {
    if(rata < 75){
        return 'Tidak naik'
    }else{
        return 'Naik kelas'
    }
}

export const nilaiValid = (nilai) => {
    return nilai >= 0 && nilai <= 95;
}