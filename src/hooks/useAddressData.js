import { useEffect, useState } from 'react';

const URL =
  'https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json';

export function useAddressData() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    provinces: [],
    amphuresByProvinceId: {},
    tambonsByAmphureId: {},
    postalCodesByTambonId: {},
  });

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(URL);
      const json = await res.json();
      const provinces = json.map((p) => ({
        id: String(p.id),
        name_th: p.name_th,
        name_en: p.name_en,
      }));
      const amphuresByProvinceId = {};
      const tambonsByAmphureId = {};
      const postalCodesByTambonId = {};
      json.forEach((p) => {
        amphuresByProvinceId[p.id] = p.amphure.map((a) => ({
          id: String(a.id),
          name_th: a.name_th,
          name_en: a.name_en,
        }));
        p.amphure.forEach((a) => {
          tambonsByAmphureId[a.id] = a.tambon.map((t) => ({
            id: String(t.id),
            name_th: t.name_th,
            name_en: t.name_en,
          }));
          a.tambon.forEach((t) => {
            postalCodesByTambonId[t.id] = [String(t.zip_code)];
          });
        });
      });
      setData({
        provinces,
        amphuresByProvinceId,
        tambonsByAmphureId,
        postalCodesByTambonId,
      });
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getAmphuresByProvinceId = (id) => data.amphuresByProvinceId[id] || [];
  const getTambonsByAmphureId = (id) => data.tambonsByAmphureId[id] || [];
  const getPostalCodesByTambonId = (id) => data.postalCodesByTambonId[id] || [];
  const displayName = (item, lang) => (lang === 'th' ? item.name_th : item.name_en);

  return {
    ...data,
    loading,
    error,
    retry: fetchData,
    getAmphuresByProvinceId,
    getTambonsByAmphureId,
    getPostalCodesByTambonId,
    displayName,
  };
}
