'use client'

import AddProjectModal from "@/components/AddProjectModal";
import { useState } from "react";

function AddProjectPage() {
    const [showModal, setShowModal] = useState(true);
    return (<AddProjectModal isOpen={showModal} setIsOpen={setShowModal} />);
}

export default AddProjectPage;