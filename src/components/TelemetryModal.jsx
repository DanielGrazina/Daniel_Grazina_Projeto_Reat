import React from "react";

// formatar data de segundos para minutos
const formatLapTime = (timeInSeconds) => {
    if (!timeInSeconds) return "--:--.---";
    const minutes = Math.floor(timeInSeconds / 60);
    const remainingSeconds = timeInSeconds % 60;
    const secondsFormatted = remainingSeconds.toFixed(3);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${secondsFormatted}`;
};

const formatSectorTime = (timeInSeconds) => {
    return timeInSeconds ? timeInSeconds.toFixed(3) : "--.---";
};

export default function TelemetryModal({ driver, laps, onClose }) {
    if (!driver) return null;

    const bestLap = laps.length > 0 ? laps[0] : null;

    let s1 = 0, s2 = 0, s3 = 0;
    let s1Width = "33%", s2Width = "33%", s3Width = "34%";

    // Buscar os três sectores da melhor volta
    if (bestLap) {
        s1 = bestLap.duration_sector_1 || 0;
        s2 = bestLap.duration_sector_2 || 0;
        s3 = bestLap.duration_sector_3 || 0;

        const total = s1 + s2 + s3;
        if (total > 0) {
            s1Width = `${(s1 / total) * 100}%`;
            s2Width = `${(s2 / total) * 100}%`;
            s3Width = `${(s3 / total) * 100}%`;
        }
    }

    return (
        <div style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.85)", zIndex: 1050,
            display: "flex", justifyContent: "center", alignItems: "center",
            animation: "fadeIn 0.3s ease",
            backdropFilter: "blur(5px)"
        }}>

            <div className="card-f1 p-0 shadow-lg" style={{
                width: "90%", maxWidth: "600px",
                border: "1px solid var(--f1-white)",
                borderRadius: "15px 0 15px 0"
            }}>

                {/* CABEÇALHO */}
                <div className="p-3 d-flex justify-content-between align-items-center"
                    style={{ borderBottom: "1px solid var(--f1-grey-dark)", background: "var(--f1-black)" }}>
                    <div className="d-flex align-items-center gap-3">
                        <h2 className="m-0 text-white fst-italic fw-bold" style={{ fontSize: "2.5rem" }}>
                            {driver.driver_number}
                        </h2>
                        <div style={{ borderLeft: "4px solid var(--f1-red)", paddingLeft: "10px" }}>
                            <h4 className="m-0 text-uppercase fw-bold" style={{ lineHeight: 1 }}>{driver.last_name}</h4>
                            <small className="text-white text-uppercase">{driver.team_name}</small>
                        </div>
                    </div>
                    <button onClick={onClose} className="btn btn-sm btn-outline-danger text-uppercase fw-bold">Fechar ✕</button>
                </div>

                {/* CORPO DE DADOS */}
                <div className="p-4" style={{ backgroundColor: "var(--f1-carbon)" }}>

                    {laps.length === 0 ? (
                        <p className="text-center text-white">Sem dados de telemetria válidos.</p>
                    ) : (
                        <>
                            {/* DADOS PRINCIPAIS */}
                            <div className="row text-center g-3 mb-4">
                                <div className="col-6">
                                    <div className="p-2 border border-secondary rounded h-100 d-flex flex-column justify-content-center">
                                        <small className="text-white text-uppercase d-block" style={{ fontSize: "0.7rem" }}>Best Lap Time</small>
                                        <span className="fs-2 fw-bold text-white fst-italic">
                                            {bestLap ? formatLapTime(bestLap.lap_duration) : "--:--.---"}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-2 border border-secondary rounded">
                                        <small className="text-white text-uppercase d-block" style={{ fontSize: "0.7rem" }}>Total Laps</small>
                                        <span className="fs-3 fw-bold text-white">
                                            {laps.length}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* SECTOR ANALYSIS */}
                            <h6 className="text-uppercase text-white border-bottom border-secondary pb-2 mb-3" style={{ fontSize: "0.8rem" }}>
                                Sector Analysis
                            </h6>

                            {/* Números dos Setores */}
                            <div className="d-flex justify-content-between text-center mb-2 gap-2">

                                {/* SETOR 1 */}
                                <div className="flex-fill p-2 rounded" style={{ background: "var(--f1-grey-dark)" }}>
                                    <small className="d-block text-danger fw-bold" style={{ fontSize: "0.65rem" }}>SECTOR 1</small>
                                    <span className="fw-bold text-white">{formatSectorTime(s1)}</span>
                                </div>

                                {/* SETOR 2 */}
                                <div className="flex-fill p-2 rounded" style={{ background: "var(--f1-grey-dark)" }}>
                                    <small className="d-block text-primary fw-bold" style={{ fontSize: "0.65rem" }}>SECTOR 2</small>
                                    <span className="fw-bold text-white">{formatSectorTime(s2)}</span>
                                </div>

                                {/* SETOR 3 */}
                                <div className="flex-fill p-2 rounded" style={{ background: "var(--f1-grey-dark)" }}>
                                    <small className="d-block text-warning fw-bold" style={{ fontSize: "0.65rem" }}>SECTOR 3</small>
                                    <span className="fw-bold text-white">{formatSectorTime(s3)}</span>
                                </div>

                            </div>

                            <div className="progress mt-2" style={{ height: "12px", backgroundColor: "#000", borderRadius: "2px" }}>
                                <div
                                    className="progress-bar bg-danger progress-bar-striped"
                                    style={{ width: s1Width, borderRight: "2px solid black" }}
                                    title={`Sector 1: ${s1}s`}
                                ></div>
                                <div
                                    className="progress-bar bg-primary progress-bar-striped"
                                    style={{ width: s2Width, borderRight: "2px solid black" }}
                                    title={`Sector 2: ${s2}s`}
                                ></div>
                                <div
                                    className="progress-bar bg-warning progress-bar-striped"
                                    style={{ width: s3Width }}
                                    title={`Sector 3: ${s3}s`}
                                ></div>
                            </div>
                            <div className="d-flex justify-content-between mt-1 text-white" style={{ fontSize: "0.6rem" }}>
                                <span>Start</span>
                                <span>Finish Line</span>
                            </div>

                        </>
                    )}

                </div>
            </div>
        </div>
    );
}