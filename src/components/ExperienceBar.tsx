export function ExperienceBar() {
    return (
        <header className="experience-bar">
            <span>8 xp</span>
            <div>
                <div style={{ width: '58%' }} />

                <span className="current-experience" style={{ left: '58%' }}>
                    300 xp
                </span>
            </div>
            <span>600 xp</span>
        </header>
    );
}