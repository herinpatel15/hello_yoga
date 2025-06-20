import React from 'react'

function Benefit() {
    return (
        <section className="py-16 px-6 bg-white">
            <h2 className="text-3xl font-semibold text-center mb-12">Benefits of Yoga</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {["Strength & Flexibility", "Inner Peace", "Mind-Body Harmony"].map((item, i) => (
                    <div
                        key={i}
                        className="p-6 rounded-xl bg-[#f1f8f6] text-center shadow-md hover:shadow-xl transition-all"
                    >
                        <h3 className="text-xl font-medium mb-2">{item}</h3>
                        <p className="text-sm text-gray-600">
                            {i === 0
                                ? "Build core strength and improve your posture through consistent asana practice."
                                : i === 1
                                    ? "Reduce stress and anxiety with mindful breathing and meditation."
                                    : "Balance physical wellness and mental clarity every day."}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Benefit
