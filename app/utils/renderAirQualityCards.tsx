import { useAQIStations } from '@app/hooks/useAQIStations';
import { useAQIByStationID } from '@app/hooks/useAQIByStationID';
import ErrorMessage from '@app/components/alerts/ErrorMessage';
import NoData from '@app/components/alerts/NoData';
import CardAirQualityOutdoor from '@app/components/contents/CardAirQualityOutdoor';
import { SkeletonCard } from '@app/components/SkeletonCard';
import { AQIResponse } from '@app/types/aqi';

interface Props {
  selectedOption: string;
  showSkeleton: boolean;
  filteredStations: AQIResponse[] | null;
}

export const renderAirQualityCards = ({ selectedOption, showSkeleton, filteredStations }: Props) => {
    const { stations, loading: stationsLoading, error: stationsError } = useAQIStations();
    const { aqiData, loading: dataLoading, error: dataError } = useAQIByStationID(selectedOption);

    // Type guard เพื่อตรวจสอบว่า aqiData เป็น AQIResponse จริง
    const isAQIResponse = (data: any): data is AQIResponse => {
        return data && typeof data === 'object' && 'stationID' in data;
    };

    if (selectedOption === 'all') {
        if (stationsLoading || showSkeleton) return <SkeletonCard />;
        if (stationsError) return <ErrorMessage message="ไม่สามารถโหลดข้อมูลสถานีได้" />;
        if (!stations?.stations?.length) return <NoData />;

        const displayList = filteredStations ?? stations.stations
        if (!displayList.length) return <NoData />

        return displayList.map((station) => (
            <CardAirQualityOutdoor key={station.stationID} data={station} />
        ))
    }

    // กรณี selectedOption !== 'all'
    if (dataLoading) return <SkeletonCard />;
    if (dataError) return <ErrorMessage message="ไม่สามารถโหลดข้อมูลคุณภาพอากาศได้" />;
    if (!isAQIResponse(aqiData)) return <NoData />;

    return <CardAirQualityOutdoor data={aqiData} />;
};
